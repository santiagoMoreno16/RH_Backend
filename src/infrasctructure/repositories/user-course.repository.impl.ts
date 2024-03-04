import { UserCourseDatasource, UserCourseEntity } from "../../domain";
import { CreateUserCourseDto } from "../../domain/dtos/userCourse/create-user-course.dto";

export class UserCourseRepositoryImpl implements UserCourseRepositoryImpl {
  constructor(private readonly userCourseDatasource: UserCourseDatasource) {}

  create(createUserCourseDto: CreateUserCourseDto): Promise<UserCourseEntity> {
    return this.userCourseDatasource.create(createUserCourseDto);
  }
}
