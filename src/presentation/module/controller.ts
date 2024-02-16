import { Response, Request } from "express";
import { CreateModule, CustomError, ModuleRepository } from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";

export class ModuleController {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); // Winston

    return res.status(500).json({ error: "Internal Server Error" });
  };

  createModule = (req: Request, res: Response) => {
    const [error, moduleDto] = ModuleDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateModule(this.moduleRepository)
      .execute(moduleDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };
}
