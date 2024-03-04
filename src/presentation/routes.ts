import { Router } from "express";
import { AuthRoutes } from "./auth/routes";
import { UserRoutes } from "./user/routes";
import { EmployeeRoutes } from "./employee/routes";
import { CategoryRoutes } from "./category/routes";
import { PersonalProgramRoutes } from "./personalProgram/routes";
import { QuizRoutes } from "./quiz/routes";
import { PointsRoutes } from "./points/routes";
import { ModuleRoutes } from "./module/routes";
import { UserCourseRoutes } from "./user-course/routes";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    // Define all principal routes

    router.use('/api/auth', AuthRoutes.routes )
    router.use('/api/user', UserRoutes.routes );
    router.use('/api/employee', EmployeeRoutes.routes );
    router.use('/api/category', CategoryRoutes.routes );
    router.use('/api/personalprogram', PersonalProgramRoutes.routes );
    router.use('/api/quiz', QuizRoutes.routes );
    router.use('/api/points', PointsRoutes.routes );
    router.use('/api/module', ModuleRoutes.routes );
    router.use('/api/usercourse', UserCourseRoutes.routes );

    return router;
  }
}
