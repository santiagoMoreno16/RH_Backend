import { Question } from "../../interfaces/question.interface";

export class QuizDto {
  private constructor(
    public name: string,
    public image: string,
    public created_by: string,
    public questions: Question[]
  ) {}

  static create(object: { [key: string]: any }): [string?, QuizDto?] {

    const {name, image, created_by, questions} = object;
    if (!name) return ["Missing name"];
    if (!image) return ["Missing image"];
    if (!created_by) return ["Missing created by"];
    if (!questions) return ["Missing questions"];


    return [undefined, new QuizDto(name, image, created_by, questions)]
  }
}
