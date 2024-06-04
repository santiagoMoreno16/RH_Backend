export class UpdateCategoryDto {
    private constructor(public id: string, public name: string, public status: boolean, public base64: string, public imgpriv: string, public imgpublic: string,) {}
  
    static update(object: { [key: string]: any }): [string?, UpdateCategoryDto?] {
      const {id, _id, name, status, base64, imgpriv, imgpublic } = object;
  
      if (!id || _id) return ["Missing id"];
      if (!name) return ["Missing name"];
      if (status === '' || status === undefined || status === null) return ["Missing status"];
      if (!base64) return ["Missing base 64"];
      if (!imgpriv) return ["Missing img private"];
      if (!imgpublic) return ["Missing img public"];
  
      return [undefined, new UpdateCategoryDto(_id || id, name, status, base64, imgpriv, imgpublic)];
    }
  
  
  }
  