import { Factory } from "./factory";

export const handler = (event) => {
  const courseId = event.courseId;

  const couseService = Factory.createCourse();
  
  const course = couseService.getCourseById(courseId);

  console.log(course);
  return course;
}