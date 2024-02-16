
export class UpdateAccessDto {
  private constructor(
    public id: string,
    public email: string,
    public password: string,
    public access: string
  ) {}

  static update(object: { [key: string]: any }): [string?, UpdateAccessDto?] {
    const {id, email, password, access } = object;

    if (!id) return ["Missing id"];
    if (!email) return ["Missing email"];
    if (!password) return ["Missing password"];
    if (!access) return ["Missing access"];

    return [ undefined, new UpdateAccessDto(id, email, password, access), ];
  }
}
