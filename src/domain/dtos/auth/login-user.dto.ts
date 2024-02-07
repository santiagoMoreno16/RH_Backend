import { Validators } from "../../../config";

export class LoginUserDto {
  constructor(public email: string, public password: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password } = object;

    if (!email) return ["Missing email"];
    if (!Validators.email.test(email)) return ["Invalid email"];

    if (!password) return ["Missing password"];
    if (Validators.password.test(password)) return ["The password must be at least 8 characters long, including at least one lowercase letter, one uppercase letter, and one number."];

    return [undefined, new LoginUserDto(email, password)];
  }
}
