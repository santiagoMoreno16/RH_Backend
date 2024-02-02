export class PersonalProgramDto {
  private constructor(
    public code: string,
    public name: string,
    public status: boolean,
    public type: string,
    public expirationDate: string,
    public month: string,
    public userId: string,
    public categoryId: string
  ) {}


  static create(object: {[key: string]: any}): [string?, PersonalProgramDto?]{

    const {code, name, status, type, expirationDate, month, userId, categoryId} = object

    if (!code) return ["Missing code"];
    if (!name) return ["Missing name"];
    if (!status) return ["Missing status"];
    if (!type) return ["Missing type"];
    if (!expirationDate) return ["Missing expirationDate"];
    if (!month) return ["Missing month"];
    if (!userId) return ["Missing userId"];
    if (!categoryId) return ["Missing categoryId"];


    return [undefined, new PersonalProgramDto(code, name, status, type, expirationDate, month, userId, categoryId)]
  }

}
