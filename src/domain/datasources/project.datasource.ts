import { ProjectDto } from "../dtos/project/create-project.dto";
import { UpdateProjectDto } from "../dtos/project/update-project.dto";
import { ProjectEntity } from "../entities/project.entity";

export abstract class ProjectDatasource {

  abstract findById(id: string): Promise<ProjectEntity | null>;
  abstract findAll(): Promise<ProjectEntity[]>;
  abstract create(projectDto: ProjectDto): Promise<ProjectEntity>;
  abstract update(updateProjectDto: UpdateProjectDto): Promise<ProjectEntity>;
  abstract delete(id: string): Promise<void>;
}