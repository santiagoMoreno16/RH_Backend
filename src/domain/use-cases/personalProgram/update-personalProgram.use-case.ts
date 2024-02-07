import { PersonalProgramRepository } from "../../repositories/personalProgram.repository";
import { UpdatePersonalProgramDto } from "./../../dtos/personalProgram/update-personalProgram.dto";
interface PersonalProgram {
  personalProgram: {
    id: string;
    code: string;
    name: string;
    status: boolean;
    type: string;
    expirationDate: Date;
    month: Date;
    employeeId: string;
    categoryId: string;
  };
}

interface UpdatePersonalProgramUseCase { 
    execute( updatePersonalProgramDto: UpdatePersonalProgramDto ): Promise<PersonalProgram>;
}

export class UpdatePersonalProgram implements UpdatePersonalProgramUseCase {
  constructor(
    private readonly personalProgramRepository: PersonalProgramRepository
  ) {}
  async execute( updatePersonalProgramDto: UpdatePersonalProgramDto ): Promise<PersonalProgram> {
    const personalProgram = await this.personalProgramRepository.update( updatePersonalProgramDto );

    return {
      personalProgram: {
        id: personalProgram.id,
        code: personalProgram.code,
        name: personalProgram.name,
        status: personalProgram.status,
        type: personalProgram.type,
        expirationDate: personalProgram.expirationDate,
        month: personalProgram.month,
        employeeId: personalProgram.employeeId,
        categoryId: personalProgram.categoryId,
      },
    };
  }
}
