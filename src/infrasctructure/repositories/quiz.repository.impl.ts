import { QuizEntity, QuizRepository } from "../../domain";
import { QuizDto } from "../../domain/dtos/quizModule/create-quiz.dto";

export class QuizRepositoryImpl implements QuizRepository {
  constructor(private readonly quizRepository: QuizRepository) {}

  create(quizDto: QuizDto): Promise<QuizEntity> {
    return this.quizRepository.create(quizDto);
  }
}
