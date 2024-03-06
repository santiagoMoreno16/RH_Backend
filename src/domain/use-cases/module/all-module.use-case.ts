import { ModuleI } from "../../interfaces/course.interface";
import { ModuleRepository } from "../../repositories/module.repository";



interface GetAllModulesUseCase {
  execute(): Promise<ModuleI[]>;
}

export class GetAllModules implements GetAllModulesUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(): Promise<ModuleI[]> {
    const modules = await this.moduleRepository.findAll();
    return modules.map((module) => ({
      _id: module.id,
      name: module.name,
      description: module.description,
      labels: module.labels,
      type: module.type,
      assessment: module.assessment,
      modality: module.modality,
      duration: module.duration,
      deadline: module.deadline,
      created_by: module.created_by,
      img: module.img,
    }));
  }
}
