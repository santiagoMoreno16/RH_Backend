import { EmployeeDatasource, EmployeeDto, EmployeeEntity, UpdateEmployeeDto } from "../../domain";
import { EmployeeRepository } from "../../domain/repositories/employee.repository";

export class EmployeeRepositoryImpl implements EmployeeRepository {
  constructor(private readonly employeeDatasource: EmployeeDatasource) {}

  update(updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeEntity> {
    return this.employeeDatasource.update(updateEmployeeDto);
  }

  create(employeeDto: EmployeeDto): Promise<EmployeeEntity> {
    return this.employeeDatasource.create(employeeDto);
  }
}
