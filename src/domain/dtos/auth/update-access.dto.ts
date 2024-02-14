
export class UpdateAccessDto {
  private constructor(
    public id: string,
    public email: string,
    public password: string,
    public userId: string
  ) {}

  static update(object: { [key: string]: any }): [string?, UpdateAccessDto?] {
    const {id, email, password, userId } = object;

    if (!id) return ["Missing id"];
    if (!email) return ["Missing email"];
    if (!password) return ["Missing password"];
    if (!userId) return ["Missing user id"];

    return [ undefined, new UpdateAccessDto(id, email, password, userId), ];
  }
}
