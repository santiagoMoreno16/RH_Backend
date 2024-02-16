import { JwtAdapter } from "../../../config";
import { SignupUserDto } from "../../dtos/auth/signup-user.dto";
import { CustomError } from "../../errors/custom.error";
import { AuthRepository } from "../../repositories/auth.repository";

interface UserToken {
  token: string;
  user: {
    id: string;
    email: string;
    access: string;
  };
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>;

interface SignupUserUseCase {
  execute(signupUserDto: SignupUserDto): Promise<UserToken>;
}

export class SignupUser implements SignupUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken = JwtAdapter.generateToken
  ) {}

  async execute(signupUserDto: SignupUserDto): Promise<UserToken> {
    // Create User
    const access = await this.authRepository.signup(signupUserDto);

    // Token
    const token = await this.signToken({ id: access.id }, "2h");
    if (!token) throw CustomError.internalServer("Error generating token");

    return {
      token: token,
      user: {
        id: access.id,
        email: access.email,
        access: access.access
      },
    };
  }
}
