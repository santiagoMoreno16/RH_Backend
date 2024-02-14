import { AccessEntity, AuthDatasource, AuthRepository, LoginUserDto, SignupUserDto, UpdateAccessDto, UserEntity, } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  update(updateAccessDto: UpdateAccessDto): Promise<AccessEntity> {
    return this.authDatasource.update(updateAccessDto)
  }

  signup(signupUserDto: SignupUserDto): Promise<AccessEntity> {
    return this.authDatasource.signup(signupUserDto)
  }

  login(loginUserDto: LoginUserDto): Promise<AccessEntity> {
    return this.authDatasource.login(loginUserDto);
  }
}
