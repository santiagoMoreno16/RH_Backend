import { EmployeeDto } from "../dtos/employee/create-employee.dto";
import { EmployeeEntity } from "../entities/employee.entity";

export abstract class EmployeeDatasource {
  // Define rules

  abstract create(employeeDto: EmployeeDto): Promise<EmployeeEntity>;
}
