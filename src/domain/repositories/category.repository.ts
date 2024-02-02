import { CategoryDto } from "../dtos/category/create-category.dto";
import { CategoryEntity } from "../entities/category.entity";

export abstract class CategoryRepository {
    abstract create(categoryDto: CategoryDto): Promise<CategoryEntity>
}