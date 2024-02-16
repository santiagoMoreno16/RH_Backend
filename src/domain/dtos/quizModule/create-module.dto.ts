export class ModuleDto {
  private constructor(
    public name: string,
    public description: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, ModuleDto?] {
    const { name, description } = object;

    if (!name) return ["Missing name"];
    if (!description) return ["Missing description"];

    return [undefined, new ModuleDto(name, description)];
  }
}
