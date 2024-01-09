import { CustomError, UserEntity } from "../../domain";

export class UserMapper {
  static userEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, firstName, lastName, identificationType, identificationNum, phone } = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!firstName) throw CustomError.badRequest("Missing first name");
    if (!lastName) throw CustomError.badRequest("Missing last name");
    if (!identificationType) throw CustomError.badRequest("Missing identification type");
    if (!identificationNum) throw CustomError.badRequest("Missing identification number");
    if (!phone) throw CustomError.badRequest("Missing phone number");


    return new UserEntity(_id || id, firstName, lastName, identificationType, identificationNum, phone );
  }
}
