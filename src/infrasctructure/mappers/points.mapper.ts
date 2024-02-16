import { CustomError, PointsEntity } from "../../domain";

export class PointsMapper {
    static pointsEntityFromObject(object:{[key: string]:any }){
    const {id, pendingApproval, pointsForApproval, pendingAdvance, pointsRedemption} = object

    if (!id) throw CustomError.badRequest("Missing id");
    if (pendingApproval === null || pendingApproval === undefined) throw CustomError.badRequest("Missing pending approval points");
    if (!pointsForApproval === null || pointsForApproval === undefined) throw CustomError.badRequest("Missing points for approval");
    if (!pendingAdvance === null || pendingAdvance === undefined) throw CustomError.badRequest("Missing pending advance points");
    if (!pointsRedemption === null || pointsRedemption === undefined) throw CustomError.badRequest("Missing points redemption");

    return new PointsEntity(pendingApproval, pointsForApproval, pendingAdvance, pointsRedemption, id)
    }
}