//starter

import mysqlDB from './mysql-db.js'
import { makeApp } from './app';
import { dynamoDb } from './dynamodb';
// import { otherDB } from './otherDB';

// inject mysql db to app maker
const app1 = makeApp(mysqlDB)

// use another db as injection
const app2 = makeApp(dynamoDb)

// abstract app maker as long as it has these 2 functions
const app = makeApp({
  getUser: () => {},
  createUser: () => {}
})

app1.listen(8080, () => console.log("listening on port 8080"))