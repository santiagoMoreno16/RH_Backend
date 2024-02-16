import { PointsEntity } from "../entities/points.entity";

export abstract class PointsRepository {
  abstract findByUserId(id: string): Promise<PointsEntity | null>;
}