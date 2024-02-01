import { UpdateEmployeeDto } from "../../dtos/employee/update-employee.dto";
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
  

interface UpdateEmployeeUseCase {
  execute(updateEmployeeDto: UpdateEmployeeDto): Promise<Employee>;
}

export class UpdateEmployee implements UpdateEmployeeUseCase {
  constructor(private readonly userRepository: EmployeeRepository) {}

  async execute(updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
    const employee = await this.userRepository.update(updateEmployeeDto);
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
