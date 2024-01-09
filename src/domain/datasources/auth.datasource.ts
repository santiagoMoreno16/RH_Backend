import { UserEntity } from "../entities/user.entity";
import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { SignupUserDto } from "../dtos/auth/signup-user.dto";
import { AccessEntity } from "../entities/access.entity";

export abstract class AuthDatasource {
  // Define rules

  abstract login(loginUserDto: LoginUserDto): Promise<AccessEntity>;
  abstract signup(signupUserDto: SignupUserDto): Promise<AccessEntity>;
}
