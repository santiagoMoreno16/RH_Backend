import { Validators } from "../../../config";

export class UserDto {
  private constructor(
    public firstName: string,
    public lastName: string,
    public identificationType: string,
    public identificationNum: string,
    public phone: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, UserDto?] {
    const { firstName, lastName, identificationType, identificationNum, phone, } = object;

    if (!firstName) return ["Missing first name"];
    if (!lastName) return ["Missing last name"];
    if (!identificationType) return ["Missing identification type"];
    if (!identificationNum) return ["Missing identification number"];
    if (!phone) return ["Missing phone number"];
    if (!Validators.internationalPhoneNumber.test(phone)) return ["Invalid phone"];


    return [ undefined, new UserDto( firstName, lastName, identificationType, identificationNum, phone ), ];
  }
}
