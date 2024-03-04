import { ModuleModel } from "../../../data/mongodb";
import { ModuleRepository } from "../../repositories/module.repository";

interface Module {
  _id: string;
  name: string;
  description: string;
  labels: string[];
  type: string;
  assessment?: number[];
  modality: string;
  duration: number;
  deadline: Date;
  created_by: string;
  img: string;
}

interface GetAllModulesUseCase {
  execute(): Promise<Module[]>;
}

export class GetAllModules implements GetAllModulesUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(): Promise<Module[]> {
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
