import { ModuleModel } from "../../data/mongodb";
import { CustomError, ModuleDatasource, ModuleEntity } from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";
import { ModuleMapper } from "../mappers/module.mapper";

export class ModuleDatasourceImpl implements ModuleDatasource {
  async create(moduleDto: ModuleDto): Promise<ModuleEntity> {
    const { name, description } = moduleDto;

    try {
      const exists = await ModuleModel.findOne({
        name: name,
      });

      if (!exists) throw CustomError.badRequest("Error creating module");


      const module = await ModuleModel.create({
        name: name,
        description: description,
      });

      await module.save();

      return ModuleMapper.moduleEntityFromObject(module);
    } catch (error) {
      console.log("🚀 ~ ModuleDatasourceImpl ~ create ~ error:", error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
