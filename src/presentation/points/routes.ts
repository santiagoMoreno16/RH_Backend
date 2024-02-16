import { Router } from "express";
import { PointsDatasourceImpl } from "../../infrasctructure/datasources/points.datasource.impl";
import { PointsRepositoryImpl } from "../../infrasctructure/repositories/points.repository.impl";
import { PointsController } from "./controller";

export class PointsRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new PointsDatasourceImpl();

    const repository = new PointsRepositoryImpl(datasource);

    const controller = new PointsController(repository);

    router.get("/:id", controller.getByUserId);

    return router;
  }
}
