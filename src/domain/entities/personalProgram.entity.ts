export class PersonalProgramEntity {
  constructor(
    public id: string,
    public code: string,
    public name: string,
    public status: boolean,
    public type: string,
    public expirationDate: Date,
    public month: Date,
    public employeeId: string,
    public categoryId: string
  ) {}
}
