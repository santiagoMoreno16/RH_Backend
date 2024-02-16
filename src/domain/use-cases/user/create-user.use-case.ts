import { UserDto } from "../../dtos/user/create-user.dto";
import { UserRepository } from "../../repositories/user.repository";

interface User {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    identificationType: string;
    identificationNum: string;
    phone: string;
    access_id: string
  };
}

interface CreateUserUseCase {
  execute(userDto: UserDto): Promise<User>;
}

export class CreateUser implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userDto: UserDto): Promise<User> {
    // Create User
    const user = await this.userRepository.create(userDto);
    return {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        identificationType: user.identificationType,
        identificationNum: user.identificationNum,
        phone: user.phone,
        access_id: user.access_id
      },
    };
  }
}
