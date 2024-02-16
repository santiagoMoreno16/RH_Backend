import { CustomError, QuizEntity } from "../../domain";

export class QuizMapper {
  static quizEntityFromObject(object: { [key: string]: any }) {
    const { id, name, image, created_by, questions, module_id} = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!image) throw CustomError.badRequest("Missing image");
    if (!created_by) throw CustomError.badRequest("Missing created_by");
    if (!questions) throw CustomError.badRequest("Missing questions");
    if (!module_id) throw CustomError.badRequest("Missing module id");

    return new QuizEntity(id, name, image, created_by, questions, module_id)

  }
}
