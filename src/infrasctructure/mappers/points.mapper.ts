import { CustomError, PointsEntity } from "../../domain";

export class PointsMapper {
    static pointsEntityFromObject(object:{[key: string]:any }){
    const {id, strategic, tactical, operational, personal} = object

    if (!id) throw CustomError.badRequest("Missing id");
    if (strategic === null || strategic === undefined) throw CustomError.badRequest("Missing pending strategic points");
    if (!tactical === null || tactical === undefined) throw CustomError.badRequest("Missing tactical points");
    if (!operational === null || operational === undefined) throw CustomError.badRequest("Missing operational points");
    if (!personal === null || personal === undefined) throw CustomError.badRequest("Missing personal points");

    return new PointsEntity(strategic, tactical, operational, personal, id)
    }
}