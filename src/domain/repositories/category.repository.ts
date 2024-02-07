import { CategoryDto } from "../dtos/category/create-category.dto";
import { UpdateCategoryDto } from "../dtos/category/update-category.dto";
import { CategoryEntity } from "../entities/category.entity";

export abstract class CategoryRepository {
    abstract create(categoryDto: CategoryDto): Promise<CategoryEntity>
    abstract update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
}