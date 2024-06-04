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
    public base64: string,
    public imgpriv: string,
    public imgpublic: string,
  ) {}

  static update(object: { [key: string]: any }): [string?, UpdateEmployeeDto?] {
    const {id, gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic } = object;

    if (!id) return ["Missing id"];
    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (!city) return ["Missing entry city"];
    if (!enterprise) return ["Missing enterprise"];
    if (!corporatePosition) return ["Missing entry corporate position"];
    if (!userId) return ["Missing user id"];
    if (!base64) return ["Missing base 64"];
    if (!imgpriv) return ["Missing img private"];
    if (!imgpublic) return ["Missing img public"];

    return [ undefined, new UpdateEmployeeDto(id, gender, birthdate, numberChildren, entryIntoCompany, enterprise, city, corporatePosition, userId, base64, imgpriv, imgpublic), ];
  }
}
