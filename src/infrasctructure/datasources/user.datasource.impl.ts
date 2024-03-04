import {
  AccessModel,
  EmployeeModel,
  RoleModel,
  PointsModel,
  UserModel,
} from "../../data/mongodb";
import {
  CustomError,
  UpdateUserDto,
  UserDatasource,
  UserDto,
  UserEntity,
} from "../../domain";
import { UserMapper } from "../mappers/user.mapper";

export class UserDatasourceImpl implements UserDatasource {
  async findById(id: string): Promise<UserEntity | null> {
    try {
      const user = await UserModel.findOne({ access_id: id }).exec();

      return user ? UserMapper.userEntityFromObject(user) : null;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async findAll(): Promise<UserEntity[]> {
    try {
      const users = await UserModel.find().exec();
      return users.map(UserMapper.userEntityFromObject);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async delete(id: string): Promise<void> {
    try {
      console.log(`deleting ${id}`);
      await UserModel.findOneAndDelete({_id: id}).exec();
      await PointsModel.deleteMany({ userId: id }).exec();
      await RoleModel.deleteMany({ userId: id }).exec();
      await EmployeeModel.deleteMany({ userId: id }).exec();
      await AccessModel.deleteMany({ userId: id }).exec();
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async update(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const { id } = updateUserDto;

    try {
      const user = await UserModel.findByIdAndUpdate(
        { _id: id },
        { $set: updateUserDto }
      );

      if (!user) {
        throw CustomError.badRequest("Error updating user");
      }

      return updateUserDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async create(userDto: UserDto): Promise<UserEntity> {
    const {
      firstName,
      lastName,
      identificationType,
      identificationNum,
      phone,
      access_id,
    } = userDto;

    try {
      const exists = await UserModel.findOne({
        identificationNum: identificationNum,
      });
      if (exists) throw CustomError.badRequest("Error creating user");

      const user = await UserModel.create({
        firstName: firstName,
        lastName: lastName,
        identificationType: identificationType,
        identificationNum: identificationNum,
        phone: phone,
        access_id: access_id,
      });

      const points = await PointsModel.create({
        userId: user.id,
      });

      const employee = await EmployeeModel.create({
        userId: user.id,
      });

      await points.save();
      await employee.save();
      await user.save();

      return UserMapper.userEntityFromObject(user);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
