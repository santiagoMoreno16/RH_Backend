import { ModuleDto } from "../dtos/quizModule/create-module.dto";
import { UpdateModuleDto } from "../dtos/quizModule/update-module.dto";
import { ModuleEntity } from "../entities/module.entity";

export abstract class ModuleRepository {
  abstract create(moduleDto: ModuleDto): Promise<ModuleEntity>;
  abstract findAll(): Promise<ModuleEntity[]>;
  abstract findById(id: string): Promise<ModuleEntity | null>;
  abstract update(updateModuleDto: UpdateModuleDto): Promise<ModuleEntity>;
  abstract delete(id: string): Promise<void>;
}
