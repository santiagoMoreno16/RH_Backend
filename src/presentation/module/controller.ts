import { Response, Request } from "express";
import {
  CreateModule,
  CustomError,
  GetAllModules,
  ModuleRepository,
} from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";
import { FindCourseById } from "../../domain/use-cases/module/id-module.use-case";

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

  getCourseById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const course = await new FindCourseById(this.moduleRepository).execute(
        id
      );
      if (!course) {
        return res.status(404).json({ error: "Course not found" });
      }

      res.json({ course });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  getAllModules = (req: Request, res: Response) => {
    new GetAllModules(this.moduleRepository)
      .execute()
      .then((modules) => res.json(modules))
      .catch((error) => this.handleError(error, res));
  };
}
