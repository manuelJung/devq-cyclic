const {body} = require('express-validator')
const validator = require('../middlewares/validator')

exports.createQuestion = [
  body('title').isLength({min:5}).withMessage('Wir brauchen einen starken Titel'),
  body('description').exists().withMessage('Erzähl uns doch mehr zu deiner Frage'),
  body('user').exists().withMessage('Du musst eingeloggt sein'),
  validator
]