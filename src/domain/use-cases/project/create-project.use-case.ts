import { ProjectDto } from "../../dtos/project/create-project.dto";
import { ProjectRepository } from "../../repositories/project.repository";

interface Project {
  project: {
    id: string,
    name: string,
    description: string,
    type: string,
    duration: Date,
    leaderId: string,
    quizId: string,
    budget: number,
    pointId: string,
  };
}

interface CreateProjectUseCase {
  execute(projectDto: ProjectDto): Promise<Project>;
}

export class CreateProject implements CreateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(projectDto: ProjectDto): Promise<Project> {
    // Create Project
    const project = await this.projectRepository.create(projectDto);
    return {
      project: {
        id: project.id,
        name: project.name,
        description: project.description,
        type: project.type,
        duration: project.duration,
        leaderId: project.leaderId,
        quizId: project.quizId,
        budget: project.budget,
        pointId: project.pointId,
      },
    };
  }
}
