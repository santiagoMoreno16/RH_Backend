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
  };
}

interface UpdateUserUseCase {
  execute(userDto: UserDto): Promise<User>;
}

export class UpdateUser implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userDto: UserDto): Promise<User> {
    // Update User
    const user = await this.userRepository.update(userDto);
    return {
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        identificationType: user.identificationType,
        identificationNum: user.identificationNum,
        phone: user.phone,
      },
    };
  }
}
