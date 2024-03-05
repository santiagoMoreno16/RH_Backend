import { CreateUserCourseDto } from "../../dtos/userCourse/create-user-course.dto";
import { Courses } from "../../interfaces/course.interface";
import { UserCourseRepository } from "../../repositories/user-course.repository";

interface UserCourse {
  userCourse: {
    id: string;
    user_id: string;
    courses: Courses;
  };
}

interface CreateUserCourseUseCase {
  execute(createUserCourseDto: CreateUserCourseDto): Promise<UserCourse>;
}

export class CreateUserCourse implements CreateUserCourseUseCase {
  constructor(private readonly userCourseRepository: UserCourseRepository) {}

  async execute(createUserCourseDto: CreateUserCourseDto): Promise<UserCourse> {
    const userCourse = await this.userCourseRepository.create( createUserCourseDto );
    return {
      userCourse: {
        id: userCourse.id,
        user_id: userCourse.user_id,
        courses: userCourse.courses,
      },
    };
  }
}
