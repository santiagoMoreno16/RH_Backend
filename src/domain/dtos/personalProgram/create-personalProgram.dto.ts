export class PersonalProgramDto {
  private constructor(
    public code: string,
    public name: string,
    public status: boolean,
    public description: string,
    public requirement: Number,
    public userId: string,
    public categoryId: string
  ) {}


  static create(object: {[key: string]: any}): [string?, PersonalProgramDto?]{

    const {code, name, status, description, requirement, userId, categoryId} = object

    if (!code) return ["Missing code"];
    if (!name) return ["Missing name"];
    if (!status) return ["Missing status"];
    if (!description) return ["Missing description"];
    if (!requirement) return ["Missing requirement"];
    if (!userId) return ["Missing user id"];
    if (!categoryId) return ["Missing category id"];


    return [undefined, new PersonalProgramDto(code, name, status, description, requirement, userId, categoryId)]
  }

}
