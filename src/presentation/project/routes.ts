import { Router } from "express";
import { ProjectDatasourceImpl } from "../../infrasctructure/datasources/project.datasource.impl";
import { ProjectRepositoryImpl } from "../../infrasctructure/repositories/project.repository.impl";
import { ProjectController } from "./controller";

export class ProjectRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new ProjectDatasourceImpl();

    const authRepository = new ProjectRepositoryImpl(datasource);

    const controller = new ProjectController(authRepository);

    // Define all Auth routes

    router.post("/", controller.createProject);
    router.put("/", controller.updateProject);
    router.get("/:id", controller.getProjectById); 
    router.get("/", controller.getAllProjects); 
    router.delete("/:id", controller.deleteProject);

    return router;
  }
}
