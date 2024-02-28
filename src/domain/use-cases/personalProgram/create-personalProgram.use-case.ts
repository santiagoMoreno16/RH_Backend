import { PersonalProgramDto } from "../../dtos/personalProgram/create-personalProgram.dto";
import { PersonalProgramRepository } from "../../repositories/personalProgram.repository";

interface PersonalProgram {
  personalProgram: {
    code: string;
    name: string;
    status: boolean;
    description: String;
    requirement: Number;
    userId: string;
    categoryId: string;
  };
}

interface CreatePersonalProgramUseCase {
  execute(personalProgramDto: PersonalProgramDto): Promise<PersonalProgram>;
}

export class CreatePersonalProgram implements CreatePersonalProgramUseCase {
  constructor(
    private readonly personalProgramRepository: PersonalProgramRepository
  ) {}

  async execute( personalProgramDto: PersonalProgramDto ): Promise<PersonalProgram> {
    const personalProgram = await this.personalProgramRepository.create(
      personalProgramDto
    );

    return {
      personalProgram: {
        code: personalProgram.code,
        name: personalProgram.name,
        status: personalProgram.status,
        description: personalProgram.description,
        requirement: personalProgram.requirement,
        userId: personalProgram.userId,
        categoryId: personalProgram.categoryId,
      },
    };
  }
}
