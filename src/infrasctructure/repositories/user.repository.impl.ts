import { UpdateUserDto, UserDatasource, UserDto, UserEntity, UserRepository, } from "../../domain";

export class UserRepositoryImpl implements UserRepository {
  constructor(private readonly userDatasource: UserDatasource) {}
  update(updateUserDto: UpdateUserDto): Promise<UserEntity> {
    return this.userDatasource.update(updateUserDto)
  }

  create(userDto: UserDto): Promise<UserEntity> {
    return this.userDatasource.create(userDto);
  }

  findById(id: string): Promise<UserEntity | null> {
    return this.userDatasource.findById(id);
  }

  findAll(): Promise<UserEntity[]> {
    return this.userDatasource.findAll();
  }

  delete(id: string): Promise<void> {
    return this.userDatasource.delete(id);
  }

}
