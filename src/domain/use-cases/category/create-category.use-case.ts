import { CategoryDto } from "../../dtos/category/create-category.dto";
import { CategoryRepository } from "../../repositories/category.repository";

interface Category {
  category: {
    name: string;
    status: boolean;
    base64: string,
    imgpriv: string,
    imgpublic: string,
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
        base64: category.base64,
        imgpriv: category.imgpriv,
        imgpublic: category.imgpublic,
      },
    };
  }
}
