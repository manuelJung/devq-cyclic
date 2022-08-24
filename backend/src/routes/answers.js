const express = require('express')
const controller = require('../controllers/answers')

const app = express.Router()

// -> /answers
app.post('/', controller.createAnswer)


module.exports = app