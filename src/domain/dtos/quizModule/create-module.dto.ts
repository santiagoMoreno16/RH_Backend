export class ModuleDto {
  private constructor(
    public name: string,
    public description: string,
    public labels: string[],
    public type: string,
    public assessment: number[],
    public modality: string,
    public duration: number,
    public deadline: Date,
    public created_by: string,
    public img: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, ModuleDto?] {
    const { name, description, labels, type, assessment, modality, duration, deadline, created_by, img } = object;

    if (!name) return ["Missing name"];
    if (!description) return ["Missing description"];
    if (!type) return ["Missing type"];
    if (!labels) return ["Missing labels"];
    if (!modality) return ["Missing modality"];
    if (!duration) return ["Missing duration"];
    if (!deadline) return ["Missing deadline"];
    if (!created_by) return ["Missing created_by"];
    if (!img) return ["Missing image"];


    return [undefined, new ModuleDto(name, description, labels, type, assessment, modality, duration, deadline, created_by, img) ];
  }
}
