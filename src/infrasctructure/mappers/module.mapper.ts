import { CustomError, ModuleEntity } from "../../domain";

export class ModuleMapper {
  static moduleEntityFromObject(object: { [key: string]: any }) {
    const { id, name, description,  type, assessment, img } = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!description) throw CustomError.badRequest("Missing description");
    if (!type) throw CustomError.badRequest("Missing type");
    if (!assessment) throw CustomError.badRequest("Missing assessment");
    if (!img) throw CustomError.badRequest("Missing image");

    return new ModuleEntity(id, name, description, type, assessment, img);
  }
}
