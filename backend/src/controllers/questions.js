const Question = require("../models/Question")


/** @type {import("express").RequestHandler} */
exports.getQuestionList = (req, res, next) => {
  throw new Error('not implemented')
}

/** @type {import("express").RequestHandler} */
exports.getQuestionsById = (req, res, next) => {
  throw new Error('not implemented')
}

/** @type {import("express").RequestHandler} */
exports.createQuestion = async (req, res) => {
  const question = new Question(req.body)
  question.user = req.user._id
  await question.save()
  res.status(200).send(question)
}