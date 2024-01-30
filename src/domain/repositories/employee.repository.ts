import { EmployeeDto } from "../dtos/employee/create-employee.dto";
import { EmployeeEntity } from "../entities/employee.entity";

export abstract class EmployeeRepository {
    // Define rules
    abstract create(userDto: EmployeeDto): Promise<EmployeeEntity>;
  
  }
  