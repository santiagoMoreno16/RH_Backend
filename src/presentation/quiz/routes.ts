import { Router } from "express";
import { QuizDatasourceImpl } from "../../infrasctructure/datasources/quiz.datasource.impl";
import { QuizRepositoryImpl } from "../../infrasctructure";
import { QuizController } from "./controller";

export class QuizRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new QuizDatasourceImpl();

    const repository = new QuizRepositoryImpl(datasource);

    const controller = new QuizController(repository);

    router.post("/", controller.createQuiz);

    
    return router;
  }
}
