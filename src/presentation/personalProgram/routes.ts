import { PersonalProgramRepositoryImpl } from "../../infrasctructure";
import { PersonalProgramDatasourceImpl } from "./../../infrasctructure/datasources/personalProgram.datasource.impl";
import { Router } from "express";
import { PersonalProgramController } from "./controller";

export class PersonalProgramRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PersonalProgramDatasourceImpl();

    const authRepository = new PersonalProgramRepositoryImpl(datasource);

    const controller = new PersonalProgramController(authRepository);

    // Define all routes

    router.post("/", controller.createPersonalProgram);
    router.put("/", controller.updatePersonalProgram);
    router.get("/:id", controller.getProgramsByUserId);

    return router;
  }
}
