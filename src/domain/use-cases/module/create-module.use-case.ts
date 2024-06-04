import { ModuleDto } from "../../dtos/quizModule/create-module.dto";
import { Created_by } from "../../interfaces/course.interface";
import { ModuleRepository } from "../../repositories/module.repository";

interface Module {
  module: {
    name: string,
    description: string,
    labels: string[],
    type: string,
    assessment: number[],
    modality: string,
    duration: number,
    deadline: Date,
    created_by: Created_by,
    base64: string,
    imgpriv: string,
    imgpublic: string,
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
        labels:module.labels,
        type: module.type,
        assessment: module.assessment,
        modality: module.modality,
        duration: module.duration,
        deadline: module.deadline,
        created_by: module.created_by,
        base64: module.base64,
        imgpriv: module.imgpriv,
        imgpublic: module.imgpublic,
      },
    };
  }
}
