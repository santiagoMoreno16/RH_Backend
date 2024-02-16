import { CustomError, AccessEntity } from "../../domain";

export class AccessMapper {
  static accessEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, email, password, access } = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing password");
    if (!access) throw CustomError.badRequest("Missing access");

    return new AccessEntity(_id || id, email, password, access);
  } 
}
