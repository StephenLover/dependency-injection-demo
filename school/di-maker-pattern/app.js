import { makeAddLesson } from "./makeAddLesson";
import { makeGetCourseById } from "./makeGetCourseById";

const handler = event => {
  const courseId = event.courseId;
  const lesson = event.lesson;

  const documentClient = new DynamoDB.documentClient();

  // use HOC to create specilised functions

  const getCourseById = makeGetCourseById(documentClient);
  
  const course = getCourseById(courseId);

  const s3 = new S3();

  const addLesson = makeAddLesson(s3)

  const newLessonLists = addLesson(courseId, lesson)

  console.log(course, newLessonLists);
  return {
    course,
    newLessonLists
  };
}

export default handler