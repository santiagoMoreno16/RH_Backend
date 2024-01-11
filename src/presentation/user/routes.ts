import { Router } from "express";
import { UserDatasourceImpl } from "../../infrasctructure/datasources/user.datasource.impl";
import { UserRepositoryImpl } from "../../infrasctructure/repositories/user.repository.impl";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new UserDatasourceImpl();

    const authRepository = new UserRepositoryImpl(datasource);

    const controller = new UserController(authRepository);

    // Define all Auth routes

    router.post("/", controller.createUser);
    router.put("/", controller.updateUser);
    router.get("/", controller.getUser);

    // router.get("/", [AuthMiddleware.validateJWT], controller.getUser);

    return router;
  }
}
