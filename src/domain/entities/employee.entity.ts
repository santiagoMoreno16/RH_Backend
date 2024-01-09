export class EmployeeEntity {
    constructor(
      public gender: string, 
      public birthdate: string,
      public numberChildren: string,
      public boss: string,
      public entryIntoCompany: string,
      public humanResources: string,
      public img?: string
    ) {}
  }
  