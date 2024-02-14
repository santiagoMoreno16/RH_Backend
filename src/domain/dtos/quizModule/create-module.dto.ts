export class ModuleDto {
  private constructor(
    public name: string,
    public description: string,
    public quizzes: string[]
  ) {}

  static create(object: { [key: string]: any }): [string?, ModuleDto?] {
    const { name, description, quizzes } = object;

    if (!name) return ["Missing name"];
    if (!description) return ["Missing description"];
    if (!quizzes) return ["Missing quizzes"];

    return [undefined, new ModuleDto(name, description, quizzes)];
  }
}
