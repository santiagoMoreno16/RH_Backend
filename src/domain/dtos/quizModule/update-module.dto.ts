import { Created_by } from "../../interfaces/course.interface";


export class UpdateModuleDto {
    private constructor(
      public id: string,
      public name: string,
      public description: string,
      public labels: string[],
      public type: string,
      public assessment: number[],
      public modality: string,
      public duration: number,
      public deadline: Date,
      public created_by: Created_by,
      public base64: string,
      public imgpriv: string,
      public imgpublic: string,
    ) {}
  
    static update(object: { [key: string]: any }): [string?, UpdateModuleDto?] {
      const {id, name, description, labels, type, assessment, modality, duration, deadline, created_by, base64, imgpriv, imgpublic } = object;
  
      if (!id) return ["Missing id"];
      if (!name) return ["Missing Name"];
      if (!description) return ["Missing description"];
      if (!labels) return ["Missing labels"];
      if (!type) return ["Missing type"];
      if (!assessment) return ["Missing assessment"];
      if (!modality) return ["Missing modality"];
      if (!duration) return ["Missing duration"];
      if (!deadline) return ["Missing deadline"];
      if (!created_by) return ["Missing created id"];
      if (!base64) return ["Missing base 64"];
      if (!imgpriv) return ["Missing img private"];
      if (!imgpublic) return ["Missing img public"];
  
      return [ undefined, new UpdateModuleDto(id, name, description, labels, type, assessment, modality, duration, deadline, created_by, base64, imgpriv, imgpublic), ];
    }
  }
  