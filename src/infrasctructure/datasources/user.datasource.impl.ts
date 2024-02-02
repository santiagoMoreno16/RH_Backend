import {
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

      return UserMapper.userEntityFromObject(user);
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
      });

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
