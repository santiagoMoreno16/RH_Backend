import { EmployeeModel } from "../../data/mongodb";
import { CustomError, EmployeeDatasource, EmployeeDto, EmployeeEntity, UpdateEmployeeDto } from "../../domain";
import { EmployeeMapper } from "../mappers/employee.mapper";

export class EmployeeDatasourceImpl implements EmployeeDatasource {

  async update(updateEmployeeDto: UpdateEmployeeDto): Promise<EmployeeEntity> {
    const { userId } = updateEmployeeDto;
    
    try {
      const employee = await EmployeeModel.findOneAndUpdate(
        { userId: userId },
        { $set: updateEmployeeDto }
      ); 
    
      if (!employee) {
        throw CustomError.badRequest("Error updating employee");
      }

      return updateEmployeeDto;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }

  async create(employeeDto: EmployeeDto): Promise<EmployeeEntity> {
    const { gender, birthdate, numberChildren, entryIntoCompany, humanResources,boss, userId, img } = employeeDto

    try {
        const exists = await EmployeeModel.findOne({
            userId: userId,
        });
        if (exists) throw CustomError.badRequest("Error creating employee");
  
        const employee = await EmployeeModel.create({
            gender: gender,
            birthdate: birthdate,
            numberChildren: numberChildren,
            entryIntoCompany: entryIntoCompany,
            humanResources: humanResources,
            boss: boss,
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
