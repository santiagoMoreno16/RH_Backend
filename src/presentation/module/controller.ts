import { Response, Request } from "express";
import {
  CreateModule,
  CustomError,
  DeleteModule,
  GetAllModules,
  ModuleRepository,
} from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";
import { FindCourseById } from "../../domain/use-cases/module/id-module.use-case";
import { UpdateModuleDto } from "../../domain/dtos/quizModule/update-module.dto";
import { UpdateModule } from "../../domain/use-cases/module/update-module.use-case";

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
    //console.log(req.body);
    
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

  updateModule= (req: Request, res: Response) => {
    // console.log(req.body)
    const [error, updateModuleDto] = UpdateModuleDto.update(req.body);
    if (error) return res.status(400).json({ error });

    new UpdateModule(this.moduleRepository)
      .execute(updateModuleDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  deleteModule = (req: Request, res: Response) => {
    const moduleId = req.params.id;
    new DeleteModule(this.moduleRepository)
      .execute(moduleId)
      .then(() => res.status(204).send())
      .catch((error) => this.handleError(error, res));
  };
}
