import { CustomError, PersonalProgramEntity } from "../../domain";

export class PersonalProgramMapper {
    static personalProgramEntityFromObject(object: {[key: string]: any}){
        const {id, code, name, status, description, requirement, userId, categoryId} = object;

    if (!code) throw CustomError.badRequest("Missing code");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!status) throw CustomError.badRequest("Missing status");
    if (!description) throw CustomError.badRequest("Missing description");
    if (!requirement) throw CustomError.badRequest("Missing requirement");
    if (!userId) throw CustomError.badRequest("Missing user ID");
    if (!categoryId) throw CustomError.badRequest("Missing category id");

    return new PersonalProgramEntity(id,code, name, status, description, requirement, userId, categoryId);


    }
}