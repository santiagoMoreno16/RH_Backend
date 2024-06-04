import ImgBase64 from "../../../config/base64";
import { ModuleI } from "../../interfaces/course.interface";
import { ModuleRepository } from "../../repositories/module.repository";

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
