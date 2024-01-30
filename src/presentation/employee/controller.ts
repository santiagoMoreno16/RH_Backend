import { CreateEmployee, CustomError, EmployeeDto } from "../../domain";
import { EmployeeRepository } from "../../domain/repositories/employee.repository";
import { Response, Request } from "express";


export class EmployeeController {
  constructor(private readonly employeeRepository: EmployeeRepository) {}


  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); // Winston

    return res.status(500).json({ error: "Internal Server Error" });
  };

  createEmployee = (req: Request, res: Response) => {
    const [error, employeeDto] = EmployeeDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateEmployee(this.employeeRepository)
      .execute(employeeDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

}
