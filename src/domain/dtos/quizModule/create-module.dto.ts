export class ModuleDto {
  private constructor(
    public name: string,
    public description: string,
    public type: string,
    public assessment: number[],
    public img: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, ModuleDto?] {
    const { name, description, type, assessment, img } = object;

    if (!name) return ["Missing name"];
    if (!description) return ["Missing description"];
    if (!type) return ["Missing type"];
    if (!assessment) return ["Missing assessment"];
    if (!img) return ["Missing image"];

    return [undefined, new ModuleDto(name, description,  type, assessment, img) ];
  }
}
