import { EmployeeDatasource, EmployeeDto, EmployeeEntity } from "../../domain";
import { EmployeeRepository } from "../../domain/repositories/employee.repository";

export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(private readonly employeeDatasource: EmployeeDatasource) {}

  create(employeeDto: EmployeeDto): Promise<EmployeeEntity> {
    return this.employeeDatasource.create(employeeDto);
  }
}
