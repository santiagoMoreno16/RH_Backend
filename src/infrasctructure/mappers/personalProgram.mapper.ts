import { CustomError, PersonalProgramEntity } from "../../domain";

export class PersonalProgramMapper {
    static personalProgramEntityFromObject(object: {[key: string]: any}){
        const {id, _id, code, name, status, type, expirationDate, month, employeeId, categoryId} = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!code) throw CustomError.badRequest("Missing code");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!status) throw CustomError.badRequest("Missing status");
    if (!type) throw CustomError.badRequest("Missing type");
    if (!expirationDate) throw CustomError.badRequest("Missing expiration date");
    if (!month) throw CustomError.badRequest("Missing month");
    if (!employeeId) throw CustomError.badRequest("Missing employee id");
    if (!categoryId) throw CustomError.badRequest("Missing category id");

    return new PersonalProgramEntity(_id || id, code, name, status, type, expirationDate, month, employeeId, categoryId);


    }
}