const express = require('express')
const controller = require('../controllers/user')

const app = express.Router()

// -> /user/logout
app.post('/logout', controller.logout)

// -> /user/register
app.post('/register', controller.register)

// -> /user/login
app.post('/login', controller.login)


module.exports = app