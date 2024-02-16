import { Validators } from "../../../config";

export class UpdateUserDto {
  private constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public identificationType: string,
    public identificationNum: string,
    public phone: string,
    public access_id: string,
  ) {}

  static update(object: { [key: string]: any }): [string?, UpdateUserDto?] {
    const {id, _id, firstName, lastName, identificationType, identificationNum, phone, access_id } = object;

    if (!_id || id) return ["Missing id"];
    if (!firstName) return ["Missing first name"];
    if (!lastName) return ["Missing last name"];
    if (!identificationType) return ["Missing identification type"];
    if (!identificationNum) return ["Missing identification number"];
    if (!phone) return ["Missing phone number"];
    if (!Validators.internationalPhoneNumber.test(phone)) return ["Invalid phone"];
    if (!access_id) return ["Missing access id"];

    return [ undefined, new UpdateUserDto(_id || id, firstName, lastName, identificationType, identificationNum, phone, access_id), ];
  }
}
