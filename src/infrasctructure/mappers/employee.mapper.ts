import { CustomError, EmployeeEntity } from "../../domain";

export class EmployeeMapper {
  static employeeEntityFromObject(object: { [key: string]: any }) {
    const { id, gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic } = object;

    // if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!gender) throw CustomError.badRequest("Missing gender");
    if (!birthdate) throw CustomError.badRequest("Missing birthdate");
    if (!numberChildren) throw CustomError.badRequest("Missing number of children");
    if (!entryIntoCompany) throw CustomError.badRequest("Missing entry into company");
    if (!enterprise) throw CustomError.badRequest("Missing entry enterprise");
    if (!city) throw CustomError.badRequest("Missing entry city");
    if (!corporatePosition) throw CustomError.badRequest("Missing entry corporate position");
    if (!userId) throw CustomError.badRequest("Missing user id");
    //if (!base64) throw CustomError.badRequest("Missing base64");
    //if (!imgpriv) throw CustomError.badRequest("Missing imagpriv");
    //if (!imgpublic) throw CustomError.badRequest("Missing imgpublic");

    return new EmployeeEntity( id, gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic );
  }
}
