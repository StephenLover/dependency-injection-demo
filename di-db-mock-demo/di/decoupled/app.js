import express from 'express';
import { getUser, createUser } from './mysql-db';

// starter
const app = express()

app.use(express.json())

app.post('/users', async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await getUser(username)
    if (user) {
      res.status(400).send({ error: "username already taken" })
      return
    }
    const userId = await createUser(username, password)
    res.send({ userId })
  } catch (error) {
    res.sendStatus(500)
    return
  }
})

// const makeApp = (database) => {
//   const app = express()

//   app.use(express.json())

//   app.post('/users', async (req, res) => {
//     const { username, password } = req.body

//     try {
//       const user = await database.getUser(username)
//       if (user) {
//         res.status(400).send({ error: "username already taken" })
//         return
//       }
//       const userId = await database.createUser(username, password)
//       res.send({ userId })
//     } catch (error) {
//       res.sendStatus(500)
//       return
//     }
//   })
// }

// export {
//   makeApp
// }

// // DI
// const makeApp = (database) => {
//   const app = express()

//   app.use(express.json())

//   app.post('/users', async (req, res) => {
//     const { username, password } = req.body

//     try {
//       const user = await database.getUser(username)
//       if (user) {
//         res.status(400).send({ error: "username already taken" })
//         return
//       }
//       const userId = await database.createUser(username, password)
//       res.send({ userId })
//     } catch (error) {
//       res.sendStatus(500)
//       return
//     }
//   })
  
//   return app
// }

// export {
//   makeApp
// }