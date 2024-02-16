import { PointsModel } from "../../data/mongodb";
import { CustomError, PointsEntity } from "../../domain";
import { PointsDatasource } from "../../domain/datasources/points.datasource";
import { PointsMapper } from "../mappers/points.mapper";

export class PointsDatasourceImpl implements PointsDatasource {
  async findByUserId(id: string): Promise<PointsEntity | null> {
    try {
      const points = await PointsModel.findOne({ userId: id }).exec();
      return points ? PointsMapper.pointsEntityFromObject(points) : null;
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
