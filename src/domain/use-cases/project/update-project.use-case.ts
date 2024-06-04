import { ProjectDto } from "../../dtos/project/create-project.dto";
import { UpdateProjectDto } from "../../dtos/project/update-project.dto";
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

interface UpdateProjectUseCase {
  execute(updateProjectDto: UpdateProjectDto): Promise<Project>;
}

export class UpdateProject implements UpdateProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(updateProjectDto: UpdateProjectDto): Promise<Project> {
    // Update Project
    const project = await this.projectRepository.update(updateProjectDto);
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
