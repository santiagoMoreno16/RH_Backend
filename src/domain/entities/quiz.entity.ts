import { Question } from "../interfaces/question.interface";

export class QuizEntity {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public created_by: string,
    public questions: Question[],
    public module_id: string
  ) {}
}
