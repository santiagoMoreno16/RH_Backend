import { Response, Request } from "express";
import { CustomError } from "../../domain";
import { PointsRepository } from "../../domain/repositories/points.repository";

interface Translations {
  [key: string]: string;
}

const translated: Translations = {
  strategic: 'Puntos Estratégicos',
  tactical: 'Puntos Tácticos',
  operational: 'Puntos Operacionales',
  personal: 'Puntos Personales'
};

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
      const userPoints = await this.pointsRepository.findByUserId(id);

      if (!userPoints) {
        return res.status(400).json({ message: "Points not found" });
      }

      const points = this.pointsMapper(userPoints);

      res.json({ points });
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(error.statusCode).json({ error: error.message });
      }
      res.status(500).json({ message: "Internal Server Error" });
    }
  };

  pointsMapper(data: any): any[] {
    const mappedData: any[] = [];
  
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key) && key !== 'userId') {
        const translatedName = translated[key] || key; 
        mappedData.push({
          name: translatedName,
          value: data[key]
        });
      }
    }
  
    return mappedData;
  }
  
}
