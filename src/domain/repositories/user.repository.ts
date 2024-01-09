import { UserDto } from "../dtos/user/create-user.dto";
import { UserEntity } from "../entities/user.entity";

export abstract class UserRepository {
    // Define rules
    abstract create(userDto: UserDto): Promise<UserEntity>;
    // abstract readById(userDto: UserDto): Promise<UserEntity | null>;
  abstract update(userDto: UserDto): Promise<UserEntity>;
//   abstract delete(userDto: UserDto): Promise<UserEntity>;
  
  }
  