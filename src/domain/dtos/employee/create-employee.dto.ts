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
    public base64: string,
    public imgpriv: string,
    public imgpublic: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, EmployeeDto?] {
    const { gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic } = object;

    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (!city) return ["Missing entry city"];
    if (!enterprise) return ["Missing enterprise"];
    if (!corporatePosition) return ["Missing entry corporate position"];
    if (!userId) return ["Missing user id"];
    if (!base64) return ["Missing base64"];
    if (!imgpriv) return ["Missing imgpriv"];
    if (!imgpublic) return ["Missing imgpublic"];

    return [ undefined, new EmployeeDto( gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic), ];
  }
}
