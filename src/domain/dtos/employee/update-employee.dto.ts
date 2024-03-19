export class UpdateEmployeeDto {
  private constructor(
    public id: string,
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

  static update(object: { [key: string]: any }): [string?, UpdateEmployeeDto?] {
    const {id, gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, img } = object;

    if (!id) return ["Missing id"];
    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (!city) return ["Missing entry city"];
    if (!enterprise) return ["Missing enterprise"];
    if (!corporatePosition) return ["Missing entry corporate position"];
    if (!userId) return ["Missing user id"];

    return [ undefined, new UpdateEmployeeDto(id, gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, img), ];
  }
}
