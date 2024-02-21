import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infrasctructure";
import { AuthMiddleware } from "../middlewares/auth.middleware";

export class AuthRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new AuthDatasourceImpl();

    const authRepository = new AuthRepositoryImpl(datasource);

    const controller = new AuthController(authRepository);

    // Define all Auth routes

    router.post("/login", controller.loginUser);
    router.post("/signup", controller.signupUser);
    router.post("/validate", controller.validateToken);
    router.get("/:id", controller.getEmail);

    // router.get("/", [AuthMiddleware.validateJWT], controller.getUser);

    return router;
  }
}
