import { UpdateUserDto } from "./../../domain/dtos/user/update-user.dto";
import { CreateUser, CustomError, UserDto, UserRepository } from "../../domain";
import { Response, Request } from "express";
import {
  AccessModel,
  CityModel,
  EmployeeModel,
  PointsModel,
} from "../../data/mongodb";
import {
  DeleteUser,
  FindUserById,
  GetAllUsers,
} from "../../domain/use-cases/user/user.use-case";
import { UpdateUser } from "../../domain/use-cases/user/update-user.use-case";

export class UserController {
  constructor(private readonly userRepository: UserRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); // Winston

    return res.status(500).json({ error: "Internal Server Error" });
  };

  createUser = (req: Request, res: Response) => {
    const [error, userDto] = UserDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateUser(this.userRepository)
      .execute(userDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  updateUser = (req: Request, res: Response) => {
    // console.log(req.body);
    const [error, updateUserDto] = UpdateUserDto.update(req.body);
    if (error) return res.status(400).json({ error });

    new UpdateUser(this.userRepository)
      .execute(updateUserDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const user = await new FindUserById(this.userRepository).execute(id);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      const access = await AccessModel.findById({ _id: id }, { password: 0 });
      const employee = await EmployeeModel.findOne({ userId: user.id });

      if (employee) {
        const city = await CityModel.findOne({ id: employee.city });
        if (city) employee.city = city.name;
      }

      res.json({ access, user, employee });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  getAllUsers = (req: Request, res: Response) => {
    new GetAllUsers(this.userRepository)
      .execute()
      .then((users) => res.json(users))
      .catch((error) => this.handleError(error, res));
  };

  deleteUser = (req: Request, res: Response) => {
    const userId = req.params.id;
    new DeleteUser(this.userRepository)
      .execute(userId)
      .then(() => res.status(204).send())
      .catch((error) => this.handleError(error, res));
  };
}
