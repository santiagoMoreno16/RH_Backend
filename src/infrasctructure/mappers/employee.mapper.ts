import { CustomError, EmployeeEntity } from "../../domain";

export class EmployeeMapper {
  static employeeEntityFromObject(object: { [key: string]: any }) {
    const {  gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, img } = object;

    // if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!gender) throw CustomError.badRequest("Missing gender");
    if (!birthdate) throw CustomError.badRequest("Missing birthdate");
    if (!numberChildren) throw CustomError.badRequest("Missing number of children");
    if (!entryIntoCompany) throw CustomError.badRequest("Missing entry into company");
    if (!enterprise) throw CustomError.badRequest("Missing entry enterprise");
    if (!city) throw CustomError.badRequest("Missing entry city");
    if (!corporatePosition) throw CustomError.badRequest("Missing entry corporate position");
    if (!userId) throw CustomError.badRequest("Missing user id");

    return new EmployeeEntity(  gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, img );
  }
}
