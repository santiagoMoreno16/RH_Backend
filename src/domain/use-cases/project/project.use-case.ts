import { ProjectRepository } from "../../repositories/project.repository";

interface Project {
    id: string,
    name: string,
    description: string,
    type: string,
    duration: Date,
    leaderId: string,
    quizId: string,
    budget: number,
    pointId: string,
  }

interface GetAllProjectsUseCase {
  execute(): Promise<Project[]>;
}

export class GetAllProjects implements GetAllProjectsUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(): Promise<Project[]> {
    // Retrieve all projects
    const projects = await this.projectRepository.findAll();
    return projects.map((project) => ({
        id: project.id,
        name: project.name,
        description: project.description,
        type: project.type,
        duration: project.duration,
        leaderId: project.leaderId,
        quizId: project.quizId,
        budget: project.budget,
        pointId: project.pointId,
      }));
  }
}

interface DeleteProjectUseCase {
  execute(projectId: string): Promise<void>;
}

export class DeleteProject implements DeleteProjectUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(projectId: string): Promise<void> {
    await this.projectRepository.delete(projectId);
  }
}


interface FindProjectByIdUseCase {
  execute(projectId: string): Promise<Project | null>;
}

export class FindProjectById implements FindProjectByIdUseCase {
  constructor(private readonly projectRepository: ProjectRepository) {}

  async execute(id: string): Promise<Project | null> {
    const project = await this.projectRepository.findById(id);
    if (!project) {
      return null;
    }
    return {
        id: project.id,
        name: project.name,
        description: project.description,
        type: project.type,
        duration: project.duration,
        leaderId: project.leaderId,
        quizId: project.quizId,
        budget: project.budget,
        pointId: project.pointId,
    };
  }
}