const express = require('express')
const mongoose = require('mongoose')
// const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const PORT = 3000
const dbUri = 'mongodb+srv://mjung:mongotest@cluster0.di05mk9.mongodb.net/?retryWrites=true&w=majority';

const app = express()
app.use(express.json())
app.use(cookieParser())

// const corsConfig = {
//   origin: 'http://localhost:3000',
//   credentials: true,
// }

// app.use(cors(corsConfig))
// app.options('*', cors(corsConfig))

app.use('/user', require('./src/routes/user'))
app.use('/answers', require('./src/routes/answers'))
app.use('/questions', require('./src/routes/questions'))

app.post('/drop-database', async (req, res) => {
  await mongoose.connection.db.dropDatabase()
  res.status(200).send('OK')
})

app.use(express.static(__dirname + '/build'))


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

mongoose.connect(dbUri, err => {
  if(err){ console.error(err); return false;}
  // connection to mongo is successful, listen for requests
  app.listen(PORT, () => {
      console.log("listening for requests");
  })
});
