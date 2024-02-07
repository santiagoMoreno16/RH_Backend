export class UpdateEmployeeDto {
  private constructor(
    public id: string,
    public gender: string,
    public birthdate: Date,
    public numberChildren: string,
    public entryIntoCompany: Date,
    public humanResources: boolean,
    public boss: boolean,
    public userId: string,
    public img?: string
  ) {}

  static update(object: { [key: string]: any }): [string?, UpdateEmployeeDto?] {
    const {id, gender, birthdate, numberChildren, entryIntoCompany, humanResources, boss, userId, img } = object;

    if (!id) return ["Missing id"];
    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (humanResources === '' || humanResources === undefined || humanResources === null) return ["Missing human resources"];
    if (boss === '' || boss === undefined || boss === null) return ["Missing boss"];
    if (!userId) return ["Missing user id"];

    return [ undefined, new UpdateEmployeeDto(id, gender, birthdate, numberChildren, entryIntoCompany, humanResources, boss, userId, img ), ];
  }
}
