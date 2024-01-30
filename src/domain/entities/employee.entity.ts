export class EmployeeEntity {
  constructor(
    public id: string,
    public gender: string,
    public birthdate: string,
    public numberChildren: string,
    public boss: string,
    public entryIntoCompany: string,
    public humanResources: string,
    public userId: string,
    public img?: string
  ) {}
}
