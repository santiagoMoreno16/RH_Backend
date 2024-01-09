import { Validators } from "../../../config";

export class SignupUserDto {
  private constructor(
    public email: string,
    public password: string,
    public userId: string
  ) {}

  static create(object: { [key: string]: any }): [string?, SignupUserDto?] {
    const { email, password, userId } = object;

    if (!userId) return ["Missing user"];
    if (!email) return ["Missing email"];

    if (!Validators.email.test(email)) return ["Invalid email"];

    if (!password) return ["Missing password"];
    if (password.length < 8) return ["Password must be at least 8 characters"];

    return [undefined, new SignupUserDto( email.toLowerCase(), password, userId)];
  }
}
