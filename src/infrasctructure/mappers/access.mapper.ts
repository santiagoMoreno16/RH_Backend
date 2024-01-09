import { CustomError, AccessEntity } from "../../domain";

export class AccessMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, email, password, userId } = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!email) throw CustomError.badRequest("Missing email");
    if (!password) throw CustomError.badRequest("Missing password");
    if (!userId) throw CustomError.badRequest("Missing user");

    return new AccessEntity(_id || id, email, password, userId);
  }
}
