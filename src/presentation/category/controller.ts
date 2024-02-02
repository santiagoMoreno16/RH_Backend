import { Request, Response } from "express";
import { CategoryDto, CategoryRepository, CreateCategory, CustomError } from "../../domain";

export class CategoryController {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error); // Winston

    return res.status(500).json({ error: "Internal Server Error" });
  };

  createCategory = (req: Request, res: Response)=>{
    const [error, categoryDto] = CategoryDto.create(req.body);
    if (error) { console.log(error); return res.status(400).json({ error });}

    new CreateCategory(this.categoryRepository)
    .execute(categoryDto!)
    .then((data)=> res.json(data))
    .catch((error)=> this.handleError(error, res))
  }
}
