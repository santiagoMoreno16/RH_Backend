import { ModuleDto } from "../../dtos/quizModule/create-module.dto";
import { ModuleRepository } from "../../repositories/module.repository";

interface Module {
  module: {
    name: string;
    description: string;
    type: string;
    assessment: number[];
    img: string;
  };
}

interface CreateModuleUseCase {
  execute(moduleDto: ModuleDto): Promise<Module>;
}

export class CreateModule implements CreateModuleUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(moduleDto: ModuleDto): Promise<Module> {
    const module = await this.moduleRepository.create(moduleDto);
    return {
      module: {
        name: module.name,
        description: module.description,
        type: module.type,
        assessment: module.assessment,
       img: module.img,
      },
    };
  }
}
