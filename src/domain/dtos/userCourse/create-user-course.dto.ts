import { Courses } from "../../interfaces/course.interface";

export class CreateUserCourseDto {
  private constructor(public user_id: string, public courses: Courses) {}

  static create(object: { [key: string]: any }): [string?, CreateUserCourseDto?] {
    const { user_id, courses } = object;

    if (!user_id) return ["Missing user id"];
    if (!courses.course_id) return ["Invalid or missing courses"];

    return [undefined, new CreateUserCourseDto(user_id, courses)];
  }
}
