import { BcryptAdapter } from "./../../config/bcrypt";
import { AccessModel, UserModel } from "../../data/mongodb";
import { AccessEntity, CustomError, LoginUserDto, SignupUserDto, UpdateAccessDto, } from "../../domain";
import { AuthDatasource } from "../../domain/datasources/auth.datasource";
import { AccessMapper } from "../mappers/access.mapper";

type hashFunction = (password: string) => string;
type compareFunction = (password: string, hashed: string) => boolean;

export class AuthDatasourceImpl implements AuthDatasource {
  constructor(
    private readonly hashPassword: hashFunction = BcryptAdapter.hash,
    private readonly comparePassword: compareFunction = BcryptAdapter.compare
  ) {}

  async update(updateAccessDto: UpdateAccessDto): Promise<AccessEntity> {
    const {id, email, password, access} = updateAccessDto;

    try {
      const exists = await AccessModel.findOne({ email: email });
      if (!exists) throw CustomError.badRequest("Error updating password");
      
      const access = await AccessModel.findById({ _id: id });
      if (!access) throw CustomError.badRequest("Access not found");
      
      const hashedPass = this.hashPassword(password);
      
        access.password = hashedPass;
      
        access.save();

        return updateAccessDto;
    } catch (error) {
      console.log(error)
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }

  }

  async signup(signupUserDto: SignupUserDto): Promise<AccessEntity> {
    const {  email, password, access } = signupUserDto;
    try {
      const exists = await AccessModel.findOne({ email: email });

      if (exists) throw CustomError.badRequest("Error creating user");
      
      const auth = await AccessModel.create({
        email: email,
        password: this.hashPassword(password),
        access: access,
      });

      await auth.save();

      return AccessMapper.accessEntityFromObject(auth);
    } catch (error) {
      console.log(error)
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<AccessEntity> {
    const { email, password, access } = loginUserDto;

    try {
      const user = await AccessModel.findOne({ email });

      if (!user) throw CustomError.badRequest("Autenticación incorrecta");

      const isMatching = this.comparePassword(password, user.password);
      if (!isMatching) throw CustomError.badRequest("Autenticación incorrecta");

      if(user.access != access) throw CustomError.badRequest("Autenticación incorrecta")

      return AccessMapper.accessEntityFromObject(user);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

}
