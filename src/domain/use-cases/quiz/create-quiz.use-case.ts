import { QuizDto } from "../../dtos/quizModule/create-quiz.dto";
import { Question } from "../../interfaces/question.interface";
import { QuizRepository } from "../../repositories/quiz.repository";

interface Quiz {
  quiz: {
    name: string;
    image: string;
    created_by: string;
    questions: Question[];
    module_id: string;
  };
}

interface CreateQuizUseCase {
  execute(quizDto: QuizDto): Promise<Quiz>;
}

export class CreateQuiz implements CreateQuizUseCase {
    constructor(private readonly quizRepository: QuizRepository){}

    async execute(quizDto: QuizDto): Promise<Quiz> {
        const quiz = await this.quizRepository.create(quizDto);

        return {
            quiz: {
                name: quiz.name,
                image: quiz.image,
                created_by: quiz.created_by,
                questions: quiz.questions,
                module_id: quiz.module_id
            }
        }
    }
}