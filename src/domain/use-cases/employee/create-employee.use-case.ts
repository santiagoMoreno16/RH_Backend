import { EmployeeDto } from "../../dtos/employee/create-employee.dto";
import { EmployeeRepository } from "../../repositories/employee.repository";

interface Employee {
  employee: {
    gender: string;
    birthdate: Date;
    numberChildren: string;
    entryIntoCompany: Date;
    humanResources: boolean;
    boss: boolean;
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
        humanResources: employee.humanResources,
        boss: employee.boss, 
        userId: employee.userId,
        img: employee.img,
      },
    };
  }
}
