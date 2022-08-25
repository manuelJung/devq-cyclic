const express = require('express')
const controller = require('../controllers/user')
const validations = require('../lib/validators/user')
require('express-async-errors')

const app = express.Router()

// -> /user
app.get('/', controller.getCurrentUser)

// -> /user/logout
app.post('/logout', controller.logout)

// -> /user/register
app.post('/register', validations.register, controller.register)

// -> /user/login
app.post('/login', validations.login, controller.login)


module.exports = app