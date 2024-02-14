import { CustomError, ModuleEntity } from "../../domain";

export class ModuleMapper {
  static moduleEntityFromObject(object: { [key: string]: any }) {
    const { id, name, description } = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!description) throw CustomError.badRequest("Missing description");

    return new ModuleEntity(id, name, description);
  }
}
