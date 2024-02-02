import { CategoryEntity } from './../entities/category.entity';
import { CategoryDto } from './../dtos/category/create-category.dto';

export abstract class CategoryDatasource {
    abstract create(categoryDto: CategoryDto): Promise<CategoryEntity>;
}