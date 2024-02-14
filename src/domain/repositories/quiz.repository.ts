import { QuizDto } from "../dtos/quizModule/create-quiz.dto";
import { QuizEntity } from "../entities/quiz.entity";

export abstract class QuizRepository {
    abstract create(quizDto: QuizDto): Promise<QuizEntity> 
}