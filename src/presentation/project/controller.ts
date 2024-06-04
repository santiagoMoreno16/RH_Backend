import { UpdateProjectDto } from "./../../domain/dtos/project/update-project.dto";
import { CreateProject, CustomError, ProjectDto, ProjectRepository, UpdateProject } from "../../domain";
import { Response, Request } from "express";
import {
  AccessModel,
  CityModel,
  EmployeeModel,
  PointsModel,
} from "../../data/mongodb";
import {
  DeleteProject,
  FindProjectById,
  GetAllProjects,
} from "../../domain/use-cases/project/project.use-case";
import { UpdateUser } from "../../domain/use-cases/user/update-user.use-case";

export class ProjectController {
  constructor(private readonly projectRepository: ProjectRepository) {}


  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); // Winston

    return res.status(500).json({ error: "Internal Server Error" });
  };

  updateProject= (req: Request, res: Response) => {
    // console.log(req.body)
    const [error, updateProjectDto] = UpdateProjectDto.update(req.body);
    if (error) return res.status(400).json({ error });

    new UpdateProject(this.projectRepository)
      .execute(updateProjectDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  createProject = (req: Request, res: Response) => {
    console.log(req.body);
    const [error, projectDto] = ProjectDto.create(req.body);
    console.log("🚀 ~ ProjectController ~ req.body:", req.body)
    if (error) { console.log(error); return res.status(400).json({ error });}

    new CreateProject(this.projectRepository)
      .execute(projectDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };

  getProjectById = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const project = await new FindProjectById(this.projectRepository).execute(id);
      if (!project) {
        return res.status(404).json({ error: "Project not found" });
      }

      res.json({ project });
    } catch (error) {
      this.handleError(error, res);
    }
  };

  getAllProjects = (req: Request, res: Response) => {
    new GetAllProjects(this.projectRepository)
      .execute()
      .then((project) => res.json(project))
      .catch((error) => this.handleError(error, res));
  };

  deleteProject = (req: Request, res: Response) => {
    const projectId = req.params.id;
    new DeleteProject(this.projectRepository)
      .execute(projectId)
      .then(() => res.status(204).send())
      .catch((error) => this.handleError(error, res));
  };
}
