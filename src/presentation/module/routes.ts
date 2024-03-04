import { Router } from "express";
import { ModuleDatasourceImpl } from "../../infrasctructure/datasources/module.datasource.impl";
import { ModuleRepositoryImpl } from "../../infrasctructure";
import { ModuleController } from "./controller";

export class ModuleRoutes {
    static get routes(): Router {
      const router = Router();
  
      const datasource = new ModuleDatasourceImpl();
  
      const repository = new ModuleRepositoryImpl(datasource);
  
      const controller = new ModuleController(repository);
  
      router.post("/", controller.createModule);
      router.get("/", controller.getAllModules);
  
      
      return router;
    }
  }