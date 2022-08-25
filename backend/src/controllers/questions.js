const Question = require("../models/Question")


/** @type {import("express").RequestHandler} */
exports.getQuestionList = async (req, res) => {
  const questions = await Question.find().populate('user', 'name')
  res.status(200).send(questions)
}

/** @type {import("express").RequestHandler} */
exports.getQuestionsById = async (req, res, next) => {
  const id = req.params.id
  const question = await Question.findById(id).populate('user', 'name')

  if(!question) {
    const error = new Error('diese Question-ID gibt es nicht')
    error.status = 400
    return next(error)
  }

  res.status(200).send(question)
}

/** @type {import("express").RequestHandler} */
exports.createQuestion = async (req, res) => {
  const question = new Question(req.body)
  question.user = req.user._id
  await question.save()
  res.status(200).send(question)
}