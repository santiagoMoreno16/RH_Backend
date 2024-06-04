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
  created_by: Created_by;
  base64: string,
  imgpriv: string,
  imgpublic: string,
}

interface Created_by {
  teacher_id: string;
  description: string;
  slogan: string;
  img: string
}

export { Courses, ModuleI, Created_by };