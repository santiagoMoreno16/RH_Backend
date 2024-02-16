import { QuizModel } from "../../data/mongodb";
import { CustomError, QuizDatasource, QuizEntity } from "../../domain";
import { QuizDto } from "../../domain/dtos/quizModule/create-quiz.dto";
import { QuizMapper } from "../mappers/quiz.mapper";

export class QuizDatasourceImpl implements QuizDatasource {
  async create(quizDto: QuizDto): Promise<QuizEntity> {
    const { name, image, created_by, questions, module_id } = quizDto;

    try {
      const exists = await QuizModel.findOne({
        name: name,
      });

      if (exists) throw CustomError.badRequest("Error creating quiz");

      const quiz = await QuizModel.create({
        name: name,
        image: image,
        created_by: created_by,
        questions: questions,
        module_id: module_id,
      });

      await quiz.save();

      return QuizMapper.quizEntityFromObject(quiz);
    } catch (error) {
      console.log("🚀 ~ QuizDatasourceImpl ~ create ~ error:", error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
