import ImgBase64 from "../../../config/base64";
import { ModuleController } from "../../../presentation/module/controller";
import { ModuleI } from "../../interfaces/course.interface";
import { ModuleRepository } from "../../repositories/module.repository";



interface GetAllModulesUseCase {
  execute(): Promise<ModuleI[]>;
}

export class GetAllModules implements GetAllModulesUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(): Promise<ModuleI[]> {
    const modules = await this.moduleRepository.findAll();
    
    
    return modules.map((module) => {
      
      return {
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
      base64: module.base64,
      imgpriv: module.imgpriv,
      imgpublic: module.imgpublic,
    }});
  }
}

interface FindByIdUseCase {
  execute(userId: string): Promise<ModuleI | null>;
}

export class FindCourseById implements FindByIdUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(id: string): Promise<ModuleI | null> {
    const course = await this.moduleRepository.findById(id);

    if (!course) {
      return null;
    }
    return {
      _id: course.id,
      name: course.name,
      description: course.description,
      labels: course.labels,
      type: course.type,
      assessment: course.assessment,
      modality: course.modality,
      duration: course.duration,
      deadline: course.deadline,
      created_by: course.created_by,
      base64: course.base64,
      imgpriv: course.imgpriv,
      imgpublic: course.imgpublic,
    };
  }
}

interface DeleteModuleUseCase {
  execute(moduleId: string): Promise<void>;
}

export class DeleteModule implements DeleteModuleUseCase {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  async execute(moduleId: string): Promise<void> {
    await this.moduleRepository.delete(moduleId);
  }
}