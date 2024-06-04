import { Created_by } from "../../interfaces/course.interface";

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
    public created_by: Created_by,
    public base64: string,
    public imgpriv: string,
    public imgpublic: string,
  ) {}

  static create(object: { [key: string]: any }): [string?, ModuleDto?] {
    const { name, description, labels, type, assessment, modality, duration, deadline, created_by, base64, imgpriv, imgpublic } = object;

    if (!name) return ["Missing name"];
    if (!description) return ["Missing description"];
    if (!type) return ["Missing type"];
    if (!labels) return ["Missing labels"];
    if (!modality) return ["Missing modality"];
    if (!duration) return ["Missing duration"];
    if (!deadline) return ["Missing deadline"];
    if (!created_by) return ["Missing created_by"];
    if (!base64) return ["Missing base64"];
    if (!imgpriv) return ["Missing imgpriv"];
    if (!imgpublic) return ["Missing imgpublic"];


    return [undefined, new ModuleDto(name, description, labels, type, assessment, modality, duration, deadline, created_by, base64, imgpriv, imgpublic) ];
  }
}
