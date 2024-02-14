import { ModuleEntity, ModuleRepository } from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";

export class ModuleRepositoryImpl implements ModuleRepository {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  create(moduleDto: ModuleDto): Promise<ModuleEntity> {
    return this.moduleRepository.create(moduleDto);
  }
}
