import { UpdateModuleDto } from "../../dtos/quizModule/update-module.dto";
import { Created_by } from "../../interfaces/course.interface";
import { ModuleRepository } from "../../repositories/module.repository";


interface Module {
    module: {
        id: string,
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

interface UpdateModuleUseCase {
  execute(updateModuleDto: UpdateModuleDto): Promise<Module>;
}

export class UpdateModule implements UpdateModuleUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(updateModuleDto: UpdateModuleDto): Promise<Module> {
    // Update module
    const module = await this.moduleRepository.update(updateModuleDto);
    return {
        module: {
          id: module.id,
          name: module.name,
          description: module.description,
          labels: module.labels,
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
