import { CustomError, UserCourseEntity } from "../../domain";

export class UserCourseMapper {
  static userCourseEntityFromObject(object: { [key: string]: any }) {
    const { id, user_id, courses, } = object;

    if (!id) throw CustomError.badRequest("Missing id");
    if (!user_id) throw CustomError.badRequest("Missing user id");
    if (!courses) throw CustomError.badRequest("Missing course");


    return new UserCourseEntity( id, user_id, courses );
  }
}
