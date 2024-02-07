import { CategoryEntity, CustomError } from "../../domain";

export class CategoryMapper {
  static categoryEntityFromObject(object: { [key: string]: any }) {
    const { id, _id, name, status, image } = object;

    if (!_id || !id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (status === "" || status === undefined || status === null) throw CustomError.badRequest("Missing status");
    if (!image) throw CustomError.badRequest("Missing image");

    return new CategoryEntity(_id || id, name, status, image);
  }
}
