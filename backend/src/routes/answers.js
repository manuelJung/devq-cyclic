const express = require('express')
const controller = require('../controllers/answers')
const validations = require('../lib/validators/answers')
require('express-async-errors')

const app = express.Router()

// -> /answers
app.post('/', validations.createAnswer, controller.createAnswer)


module.exports = app