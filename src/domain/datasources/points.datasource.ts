import { PointsEntity } from "../entities/points.entity";

export abstract class PointsDatasource{
  abstract findByUserId(id: string): Promise<PointsEntity | null>;

}