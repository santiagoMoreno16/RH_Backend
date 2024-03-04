import { ModuleModel } from "../../data/mongodb";
import { CustomError, ModuleDatasource, ModuleEntity } from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";
import { ModuleMapper } from "../mappers/module.mapper";

export class ModuleDatasourceImpl implements ModuleDatasource {


  async findAll(): Promise<ModuleEntity[]> {
    try {
      const modules = await ModuleModel.find().exec();
      return modules.map(ModuleMapper.moduleEntityFromObject);
    } catch (error) {
      console.log(error);
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
  async create(moduleDto: ModuleDto): Promise<ModuleEntity> {
    const { name, description, labels, type, modality, duration, deadline, created_by, img} = moduleDto;

    try {
      const exists = await ModuleModel.findOne({
        name: name,
      });

      if (exists) throw CustomError.badRequest("Error creating module");


      const module = await ModuleModel.create({
        name: name,
        description: description,
        labels: labels,
        type: type,
        modality: modality,
        duration: duration,
        deadline: deadline,
        created_by: created_by,
        img: img,
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
