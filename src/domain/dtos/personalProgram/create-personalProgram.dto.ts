export class PersonalProgramDto {
  private constructor(
    public code: string,
    public name: string,
    public status: boolean,
    public type: string,
    public expirationDate: Date,
    public month: Date,
    public employeeId: string,
    public categoryId: string
  ) {}


  static create(object: {[key: string]: any}): [string?, PersonalProgramDto?]{

    const {code, name, status, type, expirationDate, month, employeeId, categoryId} = object

    if (!code) return ["Missing code"];
    if (!name) return ["Missing name"];
    if (!status) return ["Missing status"];
    if (!type) return ["Missing type"];
    if (!expirationDate) return ["Missing expirationDate"];
    if (!month) return ["Missing month"];
    if (!employeeId) return ["Missing employee id"];
    if (!categoryId) return ["Missing category id"];


    return [undefined, new PersonalProgramDto(code, name, status, type, expirationDate, month, employeeId, categoryId)]
  }

}
