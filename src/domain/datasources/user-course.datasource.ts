import { CreateUserCourseDto } from "../dtos/userCourse/create-user-course.dto";
import { UserCourseEntity } from "../entities/user-course.entity";

export abstract class UserCourseDatasource{
    abstract create(createUserCourseDto: CreateUserCourseDto): Promise<UserCourseEntity>
}