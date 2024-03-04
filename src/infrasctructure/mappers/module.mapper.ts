import { CustomError, ModuleEntity } from "../../domain";

export class ModuleMapper {
  static moduleEntityFromObject(object: { [key: string]: any }) {
    const { id, name, description, labels, type, assessment, modality, duration, deadline, created_by, img } = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!description) throw CustomError.badRequest("Missing description");
    if (!labels) throw CustomError.badRequest("Missing labels");
    if (!type) throw CustomError.badRequest("Missing type");
    if (!modality) throw CustomError.badRequest("Missing modality");
    if (!duration) throw CustomError.badRequest("Missing duration");
    if (!deadline) throw CustomError.badRequest("Missing deadline");
    if (!created_by) throw CustomError.badRequest("Missing created by");
    if (!assessment) throw CustomError.badRequest("Missing assessment");
    if (!img) throw CustomError.badRequest("Missing image");

    return new ModuleEntity(id, name, description, labels, type, assessment, modality, duration, deadline, created_by, img);
  }
}
