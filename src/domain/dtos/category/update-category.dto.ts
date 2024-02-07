export class UpdateCategoryDto {
    private constructor(public id: string, public name: string, public status: boolean, public image: string) {}
  
    static update(object: { [key: string]: any }): [string?, UpdateCategoryDto?] {
      const {id, _id, name, status, image } = object;
  
      if (!id || _id) return ["Missing id"];
      if (!name) return ["Missing name"];
      if (status === '' || status === undefined || status === null) return ["Missing status"];
      if (!image) return ["Missing image"];
  
      return [undefined, new UpdateCategoryDto(_id || id, name, status, image)];
    }
  
  
  }
  