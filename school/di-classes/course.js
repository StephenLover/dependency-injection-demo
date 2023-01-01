export class Course {
  constructor(documentClient, s3) {
    this.documentClient = documentClient;
    this.s3 = s3;
  }

  getCourseById(courseId) {
    this.documentClient.get({ courseId });
  }

  addLesson(courseId, lesson) {
    const existingLessons = this.s3.getObject({ courseId });
    this.s3.putObject({ courseId, lessons: [...existingLessons, lesson]});
  }
}