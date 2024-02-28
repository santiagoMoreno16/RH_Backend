export class PersonalProgramEntity {
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public status: boolean,
    public description: string,
    public requirement: Number,
    public userId: string,
    public categoryId: string
  ) {}
}
