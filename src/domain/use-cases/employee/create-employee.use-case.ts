import { EmployeeDto } from "../../dtos/employee/create-employee.dto";
import { EmployeeRepository } from "../../repositories/employee.repository";

interface Employee {
  employee: {
    gender: string;
    birthdate: Date;
    numberChildren: string;
    entryIntoCompany: Date;
    enterprise: string;
    city: number;
    corporatePosition: string;
    userId: string;
    img?: string;
  };
}

interface CreateEmployeeUseCase {
  execute(employeeDto: EmployeeDto): Promise<Employee>;
}

export class CreateEmployee implements CreateEmployeeUseCase {
  constructor(private readonly employeeRepository: EmployeeRepository) {}

  async execute(employeeDto: EmployeeDto): Promise<Employee> {
    // Create Employee
    const employee = await this.employeeRepository.create(employeeDto);
    return {
      employee: {
        gender: employee.gender,
        birthdate: employee.birthdate,
        numberChildren: employee.numberChildren,
        entryIntoCompany: employee.entryIntoCompany,
        enterprise: employee.enterprise, 
        city: employee.city,
        corporatePosition: employee.corporatePosition,
        userId: employee.userId,
        img: employee.img,
      },
    };
  }
}
