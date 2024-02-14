import { Request, Response } from "express";
import { CreateQuiz, CustomError, QuizRepository } from "../../domain";
import { QuizDto } from "../../domain/dtos/quizModule/create-quiz.dto";

export class QuizController {
  constructor(private readonly quizRepository: QuizRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); // Winston

    return res.status(500).json({ error: "Internal Server Error" });
  };

  createQuiz = (req: Request, res: Response) => {
    const [error, quizDto] = QuizDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateQuiz(this.quizRepository)
      .execute(quizDto!)
      .then((data) => res.json(data))
      .catch((err) => this.handleError(error, res));
  };
}
