import { Router } from "express";
import { EmployeeDatasourceImpl } from "../../infrasctructure/datasources/employee.datasource.impl";
import { EmployeeRepositoryImpl } from "../../infrasctructure";
import { EmployeeController } from "./controller";

export class EmployeeRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new EmployeeDatasourceImpl();

    const repository = new EmployeeRepositoryImpl(datasource);

    const controller = new EmployeeController(repository);

    // Define all Employee routes

    router.post("/", controller.createEmployee);
    router.put("/", controller.updateEmployee);

    return router;
  }
}
