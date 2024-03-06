import { ModuleEntity, ModuleRepository } from "../../domain";
import { ModuleDto } from "../../domain/dtos/quizModule/create-module.dto";

export class ModuleRepositoryImpl implements ModuleRepository {
  constructor(private readonly moduleRepository: ModuleRepository) {}

  findById(id: string): Promise<ModuleEntity | null> {
    return this.moduleRepository.findById(id);
  }
  findAll(): Promise<ModuleEntity[]> {
    return this.moduleRepository.findAll();
  }

  create(moduleDto: ModuleDto): Promise<ModuleEntity> {
    return this.moduleRepository.create(moduleDto);
  }
}
