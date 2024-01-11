import { UpdateUserDto } from "../dtos/user/update-user.dto";
import { UserDto } from "../dtos/user/create-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserDatasource {
  abstract create(userDto: UserDto): Promise<UserEntity>;
  abstract update(updateUserDto: UpdateUserDto): Promise<UserEntity>;
  // abstract get(updateUserDto: UpdateUserDto): Promise<UserEntity>;
//   abstract delete(userDto: UserDto): Promise<UserEntity>;
    
}