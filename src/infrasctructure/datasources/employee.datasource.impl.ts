import { EmployeeModel } from "../../data/mongodb";
import { CustomError, EmployeeDatasource, EmployeeDto, EmployeeEntity } from "../../domain";
import { EmployeeMapper } from "../mappers/employee.mapper";

export class EmployeeDatasourceImpl implements EmployeeDatasource {

  async create(employeeDto: EmployeeDto): Promise<EmployeeEntity> {
    const { gender, birthdate, boss, entryIntoCompany, humanResources, userId, img } = employeeDto

    try {
        const exists = await EmployeeModel.findOne({
            userId: userId,
        });
        if (exists) throw CustomError.badRequest("Error creating employee");
  
        const employee = await EmployeeModel.create({
            gender: gender,
            birthdate: birthdate,
            boss: boss,
            entryIntoCompany: entryIntoCompany,
            humanResources: humanResources,
            userId: userId,
            img: img,
        });
  
        await employee.save();
  
        return EmployeeMapper.employeeEntityFromObject(employee);
      } catch (error) {
        console.log(error);
        if (error instanceof CustomError) {
          throw error;
        }
        throw CustomError.internalServer();
      }

    }
 
 
}
