import { QuizEntity } from '../entities/quiz.entity';
import { QuizDto } from './../dtos/quizModule/create-quiz.dto';
export abstract class QuizDatasource {
    abstract create(quizDto: QuizDto): Promise<QuizEntity>
} 