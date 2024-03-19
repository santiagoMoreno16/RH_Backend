export class EmployeeEntity {
  constructor(
    public id: string,
    public gender: string,
    public birthdate: Date,
    public numberChildren: string,
    public entryIntoCompany: Date,
    public enterprise: string,
    public city: number,
    public corporatePosition: string,
    public userId: string,
    public img?: string
  ) {}
}
