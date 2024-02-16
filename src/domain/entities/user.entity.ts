export class UserEntity {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public identificationType: string,
    public identificationNum: string,
    public phone: string,
    public access_id: string,
    ) {}
  }

// Role Table
// Name
// Admin
// Leader 
// manager 
// User -> Employee


//  -> Employee Table
// public corporatePosition: string

// public gender: string, //Tienen que ir en otra tabla
// public birthdate: string,
// public numberChildren: string,
// public boss: string,
// public entryIntoCompany: string,
// public humanResources: string,
// public img?: string


// position Table

// Un cargo puede dar puntos a un leader para asginar puntos.
// 


// Areas o proyectos