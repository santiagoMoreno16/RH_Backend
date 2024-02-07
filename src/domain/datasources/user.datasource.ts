import { UpdateUserDto } from "../dtos/user/update-user.dto";
import { UserDto } from "../dtos/user/create-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserDatasource {
  abstract create(userDto: UserDto): Promise<UserEntity>;
  abstract update(updateUserDto: UpdateUserDto): Promise<UserEntity>;
  abstract findById(id: string): Promise<UserEntity | null>;
  abstract findAll(): Promise<UserEntity[]>;
  abstract delete(id: string): Promise<void>;
    
}