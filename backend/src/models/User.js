const mongoose = require('mongoose')

const Schema = mongoose.Schema({
  name: {type:String, required:true, unique:true},
  email: {type:String, required:true, unique:true},
  password: {type:String, required:true},
  token: String,
})

module.exports = mongoose.model('User', Schema, 'users')