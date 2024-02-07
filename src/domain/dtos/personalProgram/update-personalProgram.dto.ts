export class UpdatePersonalProgramDto {
    private constructor(
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
  
  
    static update(object: {[key: string]: any}): [string?, UpdatePersonalProgramDto?]{
  
      const {id, code, name, status, type, expirationDate, month, employeeId, categoryId} = object
  
      if (!id) return ["Missing id"];
      if (!code) return ["Missing code"];
      if (!name) return ["Missing name"];
      if (!status) return ["Missing status"];
      if (!type) return ["Missing type"];
      if (!expirationDate) return ["Missing expirationDate"];
      if (!month) return ["Missing month"];
      if (!employeeId) return ["Missing employee id"];
      if (!categoryId) return ["Missing category id"];
  
  
      return [undefined, new UpdatePersonalProgramDto(id, code, name, status, type, expirationDate, month, employeeId, categoryId)]
    }
  
  }
  