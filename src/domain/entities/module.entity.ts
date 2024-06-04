import { Created_by } from "../interfaces/course.interface";

export class ModuleEntity {
  constructor(
    public id: string,
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
}
