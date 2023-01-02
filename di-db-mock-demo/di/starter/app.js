import express from 'express';
import mysql from 'mysql2'

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'some_database'
})

const app = express()

app.use(express.json())

// sign up
app.post('/users', async (req, res) => {
  // grab username and password from request body
  const { username, password } = req.body

  try {
    // query rows from db by using SELECT syntax with the specific username
    const [rows] = await connection.promise().query(
      `SELECT * 
        FROM users 
        WHERE username = ?`,
      [username]
    )

    // results with that specific username is existed
    if (rows.length > 0) {
      res.status(400).send({ error: "username already taken" })
      return
    }

    // otherwise, use INSERT syntax to signup for that user
    const { insertId } = await connection.promise().query(
      `INSERT INTO users (username, password) 
        VALUES (?, ?)`,
      [username, password]
    )

    // after it succeed, send the new userId back to client
    res.send({ userId: insertId })
  } catch (error) {
    // simple error handling
    res.sendStatus(500)
    return
  }
})