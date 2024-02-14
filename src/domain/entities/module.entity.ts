import { Question } from "../interfaces/question.interface";

export class ModuleEntity {
  constructor(
    public id: string,
    public name: string,
    public description: string,
  ) {}
}
