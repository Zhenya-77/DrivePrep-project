import createHttpError from 'http-errors';
import { Question } from '../models/question.js';

export async function checkAnswer(req, res) {
  const { questionId, answerId } = req.body;

  const question = await Question.findById(questionId);

  if (!question) {
    throw createHttpError(404, 'Question not found');
  }

  const data = question.answers.find(ans => ans._id.toString() === answerId);

  if (!data) {
    throw createHttpError(400, 'Answer does not belong to this question');
  }

  res.status(200).json({
    isCorrect: data.isCorrect,
    explanation: question.explanation,
  });
}
