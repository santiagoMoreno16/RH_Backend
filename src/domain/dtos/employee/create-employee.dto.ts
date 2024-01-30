import { Validators } from "../../../config";

export class EmployeeDto {
  private constructor(
    public gender: string,
    public birthdate: string,
    public numberChildren: string,
    public boss: string,
    public entryIntoCompany: string,
    public humanResources: string,
    public userId: string,
    public img?: string
  ) {}

  static create(object: { [key: string]: any }): [string?, EmployeeDto?] {
    const { gender, birthdate, boss, entryIntoCompany, humanResources, userId, img } = object;

    if (!gender) return ["Missing gender"];
    if (!birthdate) return ["Missing birthdate"];
    if (!boss) return ["Missing boss"];
    if (!entryIntoCompany) return ["Missing entry into company"];
    if (!humanResources) return ["Missing human resources"];
    if (!userId) return ["Missing user id"];

    return [ undefined, new EmployeeDto( gender, birthdate, boss, entryIntoCompany, humanResources, userId, img ), ];
  }
}
