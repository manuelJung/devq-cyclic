const User = require("../models/User")
const bcrypt = require('bcrypt')
const crypto = require('crypto')


/** @type {import("express").RequestHandler} */
exports.logout = (req, res, next) => {
  throw new Error('not implemented')
}

/** @type {import("express").RequestHandler} */
exports.register = async (req, res) => {
  const user = new User(req.body)
  user.password = await bcrypt.hash(user.password, 10)
  user.token = crypto.randomBytes(64).toString('hex')
  await user.save()

  res.cookie('user-token', user.token, { maxAge: 900000, sameSite: 'strict', httpOnly: true })

  res.status(200).send(user)
}

/** @type {import("express").RequestHandler} */
exports.login = (req, res, next) => {
  throw new Error('not implemented')
}