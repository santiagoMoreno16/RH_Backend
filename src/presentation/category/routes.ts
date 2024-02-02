import { Router } from "express";
import { CategoryDatasourceImpl } from "../../infrasctructure/datasources/category.datasource.impl";
import { CategoryRepositoryImpl } from "../../infrasctructure";
import { CategoryController } from "./controller";

export class CategoryRoutes {
    static get routes(): Router {
        const router = Router();

        const datasource = new CategoryDatasourceImpl();
        const repository = new CategoryRepositoryImpl(datasource);
        const controller = new CategoryController(repository);

        router.post("/", controller.createCategory)

        return router;

    }
}