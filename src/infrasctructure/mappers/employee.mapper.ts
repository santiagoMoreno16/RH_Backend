import { CustomError, EmployeeEntity } from "../../domain";

export class EmployeeMapper {
  static employeeEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, gender, birthdate, boss, entryIntoCompany, humanResources, userId, img, } = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!gender) throw CustomError.badRequest("Missing gender");
    if (!birthdate) throw CustomError.badRequest("Missing birthdate");
    if (!boss) throw CustomError.badRequest("Missing boss");
    if (!entryIntoCompany) throw CustomError.badRequest("Missing entry into company");
    if (!humanResources) throw CustomError.badRequest("Missing human resources");
    if (!userId) throw CustomError.badRequest("Missing user id");

    return new EmployeeEntity( _id || id, gender, birthdate, boss, entryIntoCompany, humanResources, userId );
  }
}
