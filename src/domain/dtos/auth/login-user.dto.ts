import { Validators } from "../../../config";

export class LoginUserDto {
  constructor(public email: string, public password: string, public access: string) {}

  static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { email, password, access } = object;

    if (!access) return ["Missing access"];
    if (!email) return ["Ingresa un correo electrónico"];
    if (!Validators.email.test(email)) return ["Correo Inválido"];

    if (!password) return ["Ingresa una contraseña"];
    if (Validators.password.test(password)) return ["The password must be at least 8 characters long, including at least one lowercase letter, one uppercase letter, and one number."];

    return [undefined, new LoginUserDto(email, password, access)];
  }
}
