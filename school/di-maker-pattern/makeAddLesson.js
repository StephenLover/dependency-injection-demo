// add lesson

const makeAddLesson = (s3) => (courseId, lesson) => {
  const existingLessons = this.s3.getObject({ courseId });
  return s3.putObject({ courseId, lessons: [...existingLessons, lesson]});
}

export {
  makeAddLesson
}

