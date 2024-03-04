import { UserRepository } from "../../repositories/user.repository";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  identificationType: string;
  identificationNum: string;
  phone: string;
  access_id: string;
}

interface GetAllUsersUseCase {
  execute(): Promise<User[]>;
}

export class GetAllUsers implements GetAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    // Retrieve all users
    const users = await this.userRepository.findAll();
    return users.map((user) => ({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      identificationType: user.identificationType,
      identificationNum: user.identificationNum,
      phone: user.phone,
      access_id: user.access_id,
    }));
  }
}

interface DeleteUserUseCase {
  execute(userId: string): Promise<void>;
}

export class DeleteUser implements DeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userId: string): Promise<void> {
    await this.userRepository.delete(userId);
  }
}


interface FindUserByIdUseCase {
  execute(userId: string): Promise<User | null>;
}

export class FindUserById implements FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      return null;
    }
    return {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      identificationType: user.identificationType,
      identificationNum: user.identificationNum,
      phone: user.phone,
      access_id: user.access_id,
    };
  }
}