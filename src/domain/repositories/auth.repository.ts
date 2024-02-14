import { UserEntity } from "../entities/user.entity";
import { LoginUserDto } from "../dtos/auth/login-user.dto";
import { SignupUserDto } from "../dtos/auth/signup-user.dto";
import { AccessEntity } from "../entities/access.entity";
import { UpdateAccessDto } from "../dtos/auth/update-access.dto";

export abstract class AuthRepository {
  // Define rules
  abstract login(loginUserDto: LoginUserDto): Promise<AccessEntity>;
  abstract signup(signupUserDto: SignupUserDto): Promise<AccessEntity>;
  abstract update (updateAccessDto: UpdateAccessDto): Promise<AccessEntity>;

}
