const express = require('express')
const controller = require('../controllers/questions')
const validations = require('../lib/validators/questions')
const auth = require('../lib/middlewares/auth')
require('express-async-errors')

const app = express.Router()

// -> /questions
app.route('/')
  .get(controller.getQuestionList)
  .post(auth, validations.createQuestion, controller.createQuestion)

app.get('/:id', controller.getQuestionsById)


module.exports = app