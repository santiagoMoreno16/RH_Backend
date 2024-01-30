import { EmployeeDto } from "../../dtos/employee/create-employee.dto";
import { EmployeeRepository } from "../../repositories/employee.repository";

interface Employee {
  employee: {
    id: string;
    gender: string;
    birthdate: string;
    numberChildren: string;
    boss: string;
    entryIntoCompany: string;
    humanResources: string;
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
        id: employee.id,
        gender: employee.gender,
        birthdate: employee.birthdate,
        numberChildren: employee.numberChildren,
        boss: employee.boss,
        entryIntoCompany: employee.entryIntoCompany,
        humanResources: employee.humanResources,
        userId: employee.userId,
        img: employee.img,
      },
    };
  }
}
