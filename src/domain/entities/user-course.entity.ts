import { Courses } from "../interfaces/course.interface";


export class UserCourseEntity {
  constructor(
    public id: string,
    public user_id: string,
    public courses: Courses
  ) {}
}
