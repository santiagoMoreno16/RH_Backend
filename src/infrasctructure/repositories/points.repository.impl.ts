import { PointsEntity } from "../../domain";
import { PointsRepository } from "../../domain/repositories/points.repository";

export class PointsRepositoryImpl implements PointsRepository {
  constructor(private readonly repository: PointsRepository) {}

  findByUserId(id: string): Promise<PointsEntity | null> {
    return this.repository.findByUserId(id);
  }
}
