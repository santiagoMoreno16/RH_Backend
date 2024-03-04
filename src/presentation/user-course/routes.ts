import { Router } from "express";
import { UserCourseDatasourceImpl } from "../../infrasctructure/datasources/user-course.datasource.impl";
import { UserCourseRepositoryImpl } from "../../infrasctructure/repositories/user-course.repository.impl";
import { UserCourseController } from "./controller";

export class UserCourseRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserCourseDatasourceImpl();

    const authRepository = new UserCourseRepositoryImpl(datasource);

    const controller = new UserCourseController(authRepository);

    // Define all Auth routes

    router.post("/", controller.createUserCourse);

    // router.get("/", [AuthMiddleware.validateJWT], controller.getUser);

    return router;
  }
}
