export class EmployeeDto {
  private constructor(
    public gender: string,
    public birthdate: Date,
    public numberChildren: string,
    public entryIntoCompany: Date,
    public enterprise: string,
    public city: number,
    public corporatePosition: string,
    public userId: string,
    public img?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, EmployeeDto?] {
    const { gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, img } = object;

    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (!city) return ["Missing entry city"];
    if (!enterprise) return ["Missing enterprise"];
    if (!corporatePosition) return ["Missing entry corporate position"];
    if (!userId) return ["Missing user id"];

    return [ undefined, new EmployeeDto( gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, img), ];
  }
}
