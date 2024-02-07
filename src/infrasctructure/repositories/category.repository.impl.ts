import { CategoryDto, CategoryEntity, CategoryRepository, UpdateCategoryDto } from "../../domain";
import { CategoryDatasource } from "../../domain/datasources/category.datasource";

export class CategoryRepositoryImpl implements CategoryRepository {
  constructor(private readonly categoryDatasource: CategoryDatasource) {}

  update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity> {
    return this.categoryDatasource.update(updateCategoryDto);
  }

  create(categoryDto: CategoryDto): Promise<CategoryEntity> {
    return this.categoryDatasource.create(categoryDto);
  }
}
