const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const {DB_URL, DB_PORT, DB_NAME, PORT} = process.env

mongoose.connect(`mongodb://${DB_URL}:${DB_PORT}/${DB_NAME}`)

const app = express()

app.use('/user', require('./src/routes/user'))
app.use('/answers', require('./src/routes/answers'))
app.use('/questions', require('./src/routes/questions'))

app.use((req, res, next) => {
  const error = new Error('Nichts gefunden')
  error.status = 404
  next(error)
})

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: error.message
  })
})

app.listen(PORT, () => {
  console.log('Server running on port', PORT)
})