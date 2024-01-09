import { UpdateUserDto } from './../../domain/dtos/user/update-user.dto';
import { CreateUser, CustomError, UpdateUser, UserDto, UserRepository } from "../../domain";
import { Response, Request } from "express";
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
      .then( (data) => res.json(data) )
      .catch((error) => this.handleError(error, res));
  };

  updateUser = (req: Request, res: Response) => {
    // console.log(req.body);
    const [error, updateUserDto] = UpdateUserDto.update(req.body);
    if (error) return res.status(400).json({ error });

    new UpdateUser(this.userRepository)
      .execute(updateUserDto!)
      .then( (data) => res.json(data) )
      .catch((error) => this.handleError(error, res));
  };


}
