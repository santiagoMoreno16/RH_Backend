import { UpdateCategoryDto } from '../dtos/category/update-category.dto';
import { CategoryDto } from './../dtos/category/create-category.dto';
import { CategoryEntity } from './../entities/category.entity';

export abstract class CategoryDatasource {
    abstract create(categoryDto: CategoryDto): Promise<CategoryEntity>;
    abstract update(updateCategoryDto: UpdateCategoryDto): Promise<CategoryEntity>;
}