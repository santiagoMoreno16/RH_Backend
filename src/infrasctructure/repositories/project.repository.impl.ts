import { UpdateProjectDto, ProjectDatasource, ProjectDto, ProjectEntity, ProjectRepository, } from "../../domain";

export class ProjectRepositoryImpl implements ProjectRepository {

  constructor(private readonly projectDatasource: ProjectDatasource) {}

  update(updateProjectDto: UpdateProjectDto): Promise<ProjectEntity> {
    return this.projectDatasource.update(updateProjectDto)
  }

  create(projectDto: ProjectDto): Promise<ProjectEntity> {
    return this.projectDatasource.create(projectDto);
  }

  findById(id: string): Promise<ProjectEntity | null> {
    return this.projectDatasource.findById(id);
  }

  findAll(): Promise<ProjectEntity[]> {
    return this.projectDatasource.findAll();
  }

  delete(id: string): Promise<void> {
    return this.projectDatasource.delete(id);
  }

}
