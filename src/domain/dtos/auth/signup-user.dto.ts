import { Validators } from "../../../config";

export class SignupUserDto {
  private constructor(
    public email: string,
    public password: string,
    public access: string
  ) {}

  static create(object: { [key: string]: any }): [string?, SignupUserDto?] {
    const { email, password, access } = object;

    if (!access) return ["Missing access"];
    if (!email) return ["Missing email"];

    if (!Validators.email.test(email)) return ["Invalid email"];

    if (!password) return ["Missing password"];
    if (password.length < 8) return ["Password must be at least 8 characters"];

    return [undefined, new SignupUserDto( email.toLowerCase(), password, access)];
  }
}
