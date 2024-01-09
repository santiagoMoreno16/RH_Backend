import { BcryptAdapter } from "./../../config/bcrypt";
import { AccessModel, UserModel } from "../../data/mongodb";
import {
  AccessEntity,
  CustomError,
  LoginUserDto,
  SignupUserDto,
} from "../../domain";
import { AuthDatasource } from "../../domain/datasources/auth.datasource";
import { UserMapper } from "../mappers/user.mapper";
import { AccessMapper } from "../mappers/access.mapper";

type hashFunction = (password: string) => string;
type compareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {
  constructor(
    private readonly hashPassword: hashFunction = BcryptAdapter.hash,
    private readonly comparePassword: compareFunction = BcryptAdapter.compare
  ) {}

  async signup(signupUserDto: SignupUserDto): Promise<AccessEntity> {
    const {  email, password, userId } = signupUserDto;
    try {
      const exists = await AccessModel.findOne({ email: email });

      if (exists) throw CustomError.badRequest("Error creating user");
      
      const access = await AccessModel.create({
        email: email,
        password: this.hashPassword(password),
        userId: userId,
      });

      await access.save();

      return AccessMapper.userEntityFromObject(access);
    } catch (error) {
      console.log(error)
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<AccessEntity> {
    const { email, password } = loginUserDto;

    try {
      const user = await AccessModel.findOne({ email });

      if (!user) throw CustomError.badRequest("User does not exist");

      const isMatching = this.comparePassword(password, user.password);
      if (!isMatching) throw CustomError.badRequest("Password is not valid");

      return AccessMapper.userEntityFromObject(user);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

}
