import { Response, Request } from "express";
import { CreateUserCourse, CustomError, UserCourseRepository, } from "../../domain";
import { CreateUserCourseDto } from "../../domain/dtos/userCourse/create-user-course.dto";

export class UserCourseController {
  constructor(private readonly userCourseRepository: UserCourseRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(error);

    return res.status(500).json({ error: "Internal Server Error" });
  };

  createUserCourse = (req: Request, res: Response) => {
    
    const [error, createUserCourseDto] = CreateUserCourseDto.create(req.body);
    if (error) return res.status(400).json({ error });

    new CreateUserCourse(this.userCourseRepository)
      .execute(createUserCourseDto!)
      .then((data) => res.json(data))
      .catch((error) => this.handleError(error, res));
  };
}
