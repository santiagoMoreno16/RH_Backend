import { ModuleDto } from "../dtos/quizModule/create-module.dto";
import { ModuleEntity } from "../entities/module.entity";

export abstract class ModuleDatasource {
    abstract create(moduleDto: ModuleDto): Promise<ModuleEntity>;
    
}