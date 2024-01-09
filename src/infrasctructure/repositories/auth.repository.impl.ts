import { AccessEntity, AuthDatasource, AuthRepository, LoginUserDto, SignupUserDto, UserEntity, } from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  signup(signupUserDto: SignupUserDto): Promise<AccessEntity> {
    return this.authDatasource.signup(signupUserDto)
  }

  login(loginUserDto: LoginUserDto): Promise<AccessEntity> {
    return this.authDatasource.login(loginUserDto);
  }
}
