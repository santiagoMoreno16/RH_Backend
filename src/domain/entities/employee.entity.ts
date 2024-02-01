export class EmployeeEntity {
  constructor(
    public id: string,
    public gender: string,
    public birthdate: Date,
    public numberChildren: string,
    public entryIntoCompany: Date,
    public humanResources: boolean,
    public boss: boolean,
    public userId: string,
    public img?: string
  ) {}
}
