import { CategoryEntity, CustomError } from "../../domain";

export class CategoryMapper {
  static categoryEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, name, status, base64, imgpriv, imgpublic } = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (status === "" || status === undefined || status === null) throw CustomError.badRequest("Missing status");
    //if (!image) throw CustomError.badRequest("Missing image");
    if (!base64) throw CustomError.badRequest("Missing base64");
    if (!imgpriv) throw CustomError.badRequest("Missing imagpriv");
    if (!imgpublic) throw CustomError.badRequest("Missing imgpublic");

    return new CategoryEntity(_id || id, name, status, base64, imgpriv, imgpublic);
  }
}
