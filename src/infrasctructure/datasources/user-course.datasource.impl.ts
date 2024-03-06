import { UserCourseModel } from "../../data/mongodb";
import {
  CustomError,
  UserCourseDatasource,
  UserCourseEntity,
} from "../../domain";
import { CreateUserCourseDto } from "../../domain/dtos/userCourse/create-user-course.dto";
import { UserCourseMapper } from "../mappers/user-course.mapper";

export class UserCourseDatasourceImpl implements UserCourseDatasource {
  async create( createUserCourseDto: CreateUserCourseDto ): Promise<UserCourseEntity> {
    const { user_id, courses } = createUserCourseDto;

    try {
      const userCourse = await UserCourseModel.findOne({ user_id });
      let newUserCourse;

      if (userCourse) {
        const existingCourse = await UserCourseModel.findOne({
          user_id,
          "courses.course_id": courses.course_id
        });
        
        if (existingCourse) {
          throw CustomError.badRequest(
            "El usuario ya está registrado en este curso"
          );
        }
        userCourse.courses.push(courses);
        await userCourse.save();
      } else {
        newUserCourse = await UserCourseModel.create({
          user_id,
          courses: [courses],
        });
      }

      return UserCourseMapper.userCourseEntityFromObject(newUserCourse || userCourse);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }
      throw CustomError.internalServer();
    }
  }
}
