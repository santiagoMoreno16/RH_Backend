import { CreateUserCourseDto } from "../dtos/userCourse/create-user-course.dto";
import { UserCourseEntity } from "../entities/user-course.entity";

export abstract class UserCourseRepository{
    abstract create(createUserCourseDto: CreateUserCourseDto): Promise<UserCourseEntity>
}