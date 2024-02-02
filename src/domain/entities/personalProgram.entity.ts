export class PersonalProgramEntity {
  constructor(
    public code: string,
    public name: string,
    public status: boolean,
    public type: string,
    public expirationDate: string,
    public month: string,
    public userId: string,
    public categoryId: string
  ) {}
}
