import { projectModel, UserModel, PointsModel, QuizModel } from "../../data/mongodb";
import {
  CustomError,
  ProjectDatasource,
  ProjectEntity,
} from "../../domain";
import { ProjectDto } from "../../domain/dtos/project/create-project.dto";
import { UpdateProjectDto } from "../../domain/dtos/project/update-project.dto";
import { ProjectMapper } from "../mappers/project.mapper";

export class ProjectDatasourceImpl implements ProjectDatasource {
  
      async findById(id: string): Promise<ProjectEntity | null> {
        try {
          const project = await projectModel.findOne({ _id: id }).exec();

          return project ? ProjectMapper.projectEntityFromObject(project) : null;
        } catch (error) {
          console.log(error);
          if (error instanceof CustomError) {
            throw error;
          }
          throw CustomError.internalServer();
        }
      }

      async findAll(): Promise<ProjectEntity[]> {
        try {
          const projects = await projectModel.find().exec();
          return projects.map(ProjectMapper.projectEntityFromObject);
          
        } catch (error) {
          console.log(error);
          if (error instanceof CustomError) {
            throw error;
          }
          throw CustomError.internalServer();
        }
      }

      async update(updateProjectDto: UpdateProjectDto): Promise<ProjectEntity> {
        const { leaderId } = updateProjectDto;
        
        try {
          const project = await projectModel.findOneAndUpdate(
            { leaderId: leaderId },
            { $set: updateProjectDto }
          ); 
        
          if (!project) {
            throw CustomError.badRequest("Error updating project");
          }
    
          return updateProjectDto;
        } catch (error) {
          console.log(error);
          if (error instanceof CustomError) {
            throw error;
          }
          throw CustomError.internalServer();
        }
      }
      
      async create( projectDto: ProjectDto ): Promise<ProjectEntity> {
        const { name, description, type, duration, leaderId, quizId, budget, pointId } = projectDto;
    
        try {
            const exists = await projectModel.findOne({
                name: name,
            });
            if (exists) throw CustomError.badRequest("There is already a project with the same name");
      
            const project = await projectModel.create({
                name: name,
                description: description,
                type: type,
                duration: duration,
                leaderId: leaderId,
                quizId: quizId,
                budget: budget,
                pointId: pointId,
            });
      
            await project.save();
      
            return ProjectMapper.projectEntityFromObject(project);
          }catch (error) {
            console.log(error);
          if (error instanceof CustomError) {
            throw error;
          }
          throw CustomError.internalServer();
        }
    
      }

      async delete(id: string): Promise<void> {
        try {
          await projectModel.findByIdAndDelete({ _id: id }).exec();
        } catch (error) {
          console.log(error);
          if (error instanceof CustomError) {
            throw error;
          }
          throw CustomError.internalServer();
        }
      }
}
