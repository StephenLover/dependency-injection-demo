import { Course } from "./course";

export class Factory {
  static createCourse() {
    const documentClient = new DynamoDB.DocumentClient();
    const s3 = new s3();

    return new Course(documentClient, s3);
  }
}