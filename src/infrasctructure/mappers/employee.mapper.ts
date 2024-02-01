import { CustomError, EmployeeEntity } from "../../domain";

export class EmployeeMapper {
  static employeeEntityFromObject(object: { [key: string]: any }) {
    const {  gender, birthdate, numberChildren, entryIntoCompany, humanResources, boss, userId, img, } = object;

    // if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!gender) throw CustomError.badRequest("Missing gender");
    if (!birthdate) throw CustomError.badRequest("Missing birthdate");
    if (!numberChildren) throw CustomError.badRequest("Missing number of children");
    if (!entryIntoCompany) throw CustomError.badRequest("Missing entry into company");
    if (humanResources === '' || humanResources === undefined || humanResources === null) throw CustomError.badRequest("Missing human resources");
    if (boss === '' || boss === undefined || boss === null) throw CustomError.badRequest("Missing boss");
    if (!userId) throw CustomError.badRequest("Missing user id");

    return new EmployeeEntity(  gender, birthdate, numberChildren, entryIntoCompany, humanResources, boss, userId, img );
  }
}
