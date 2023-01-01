//get course by id

const makeGetCourseById = (documentClient) => (courseId) => {
  return documentClient.get({ courseId });
}

export {
  makeGetCourseById
}