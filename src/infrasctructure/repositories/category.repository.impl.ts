import { CategoryDto, CategoryEntity, CategoryRepository } from "../../domain";
import { CategoryDatasource } from "../../domain/datasources/category.datasource";

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(private readonly categoryDatasource: CategoryDatasource) {}

    create(categoryDto: CategoryDto): Promise<CategoryEntity> {
        return this.categoryDatasource.create(categoryDto)
    }

}