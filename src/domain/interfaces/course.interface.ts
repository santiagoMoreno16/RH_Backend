interface Courses {
  course_id: string;
  completed: Boolean;
}


interface ModuleI {
  _id: string;
  name: string;
  description: string;
  labels: string[];
  type: string;
  assessment?: number[];
  modality: string;
  duration: number;
  deadline: Date;
  created_by: string;
  img: string;
}

export { Courses, ModuleI };