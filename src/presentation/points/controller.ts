import { Response, Request } from "express";
import { CustomError } from "../../domain";
import { PointsRepository } from "../../domain/repositories/points.repository";

export class PointsController {
  constructor(private readonly pointsRepository: PointsRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error);

    return res.status(500).json({ error: "Internal Server Error" });
  };

  getByUserId = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const points = await this.pointsRepository.findByUserId(id);

      if (!points) {
        return res.status(400).json({ message: "Points not found" });
      }

      res.json({ points });
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ error: error.message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  };
}
