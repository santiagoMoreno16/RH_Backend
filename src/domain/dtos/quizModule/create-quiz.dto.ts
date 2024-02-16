import { Question } from "../../interfaces/question.interface";

export class QuizDto {
  private constructor(
    public name: string,
    public image: string,
    public created_by: string,
    public questions: Question[],
    public module_id: string,

  ) {}

  static create(object: { [key: string]: any }): [string?, QuizDto?] {

    const {name, image, created_by, questions, module_id} = object;
    if (!name) return ["Missing name"];
    if (!image) return ["Missing image"];
    if (!created_by) return ["Missing created by"];
    if (!questions) return ["Missing questions"];
    if (!module_id) return ["Missing module id"];
 

    return [undefined, new QuizDto(name, image, created_by, questions, module_id)]
  }
}
