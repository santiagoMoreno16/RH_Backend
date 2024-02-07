import { UpdateCategoryDto } from "../../dtos/category/update-category.dto";
import { CategoryRepository } from "../../repositories/category.repository";

interface Category {
  category: {
    id: string;
    name: string;
    status: boolean;
    image: string;
  };
}

interface UpdateCategoryUseCase {
  execute(updateCategoryDto: UpdateCategoryDto): Promise<Category>;
}

export class UpdateCategory implements UpdateCategoryUseCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.update(updateCategoryDto);

    return {
      category: {
        id: category.id,
        name: category.name,
        status: category.status,
        image: category.image,
      },
    };
  }
}
