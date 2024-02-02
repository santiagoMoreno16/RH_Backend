import { CategoryDto } from "../../dtos/category/create-category.dto";
import { CategoryRepository } from "../../repositories/category.repository";

interface Category {
  category: {
    name: string;
    status: boolean;
    image: string;
  };
}

interface CreateCategoryUseCase {
  execute(categoryDto: CategoryDto): Promise<Category>;
}

export class CreateCategory implements CreateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(categoryDto: CategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create(categoryDto);

    return {
      category: {
        name: category.name,
        status: category.status,
        image: category.image,
      },
    };
  }
}
