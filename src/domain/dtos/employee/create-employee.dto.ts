export class EmployeeDto {
  private constructor(
    public gender: string,
    public birthdate: Date,
    public numberChildren: string,
    public entryIntoCompany: Date,
    public humanResources: boolean,
    public boss: boolean,
    public userId: string,
    public img?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, EmployeeDto?] {
    const { gender, birthdate, numberChildren, entryIntoCompany, humanResources, userId, boss, img } = object;

    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!numberChildren) return ["Missing number of children"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (humanResources === '' || humanResources === undefined || humanResources === null) return ["Missing human resources"];
    if (boss === '' || boss === undefined || boss === null) return ["Missing boss"];
    if (!userId) return ["Missing user id"];

    return [ undefined, new EmployeeDto( gender, birthdate, numberChildren, entryIntoCompany, humanResources, boss, userId, img ), ];
  }
}
