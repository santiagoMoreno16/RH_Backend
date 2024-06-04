import { CustomError,  ProjectEntity} from "../../domain";

export class ProjectMapper {
  static projectEntityFromObject(object: { [key: string]: any }) {
    const { id, name, description, type, duration, leaderId, quizId, budget, pointId } = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!name) throw CustomError.badRequest("Missing name");
    if (!description) throw CustomError.badRequest("Missing description");
    if (!type) throw CustomError.badRequest("Missing type");
    if (!duration) throw CustomError.badRequest("Missing duration");
    if (!leaderId) throw CustomError.badRequest("Missing leader");
    if (!quizId) throw CustomError.badRequest("Missing quiz id");
    if (!budget) throw CustomError.badRequest("Missing budget");
    if (!pointId) throw CustomError.badRequest("Missing point id");

    return new ProjectEntity( id, name, description, type, duration, leaderId, quizId, budget, pointId );
  }
}
