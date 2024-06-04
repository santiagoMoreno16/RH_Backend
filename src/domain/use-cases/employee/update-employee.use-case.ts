import { UpdateEmployeeDto } from "../../dtos/employee/update-employee.dto";
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
    base64: string,
    imgpriv: string,
    imgpublic: string,
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
        enterprise: employee.enterprise,
        city: employee.city,
        corporatePosition: employee.corporatePosition,
        userId: employee.userId,
        base64: employee.base64,
        imgpriv: employee.imgpriv,
        imgpublic: employee.imgpublic,
      },
    };
  }
}
