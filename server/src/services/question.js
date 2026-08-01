import createHttpError from 'http-errors';
import { Category } from '../models/category.js';
import { Question } from '../models/question.js';

export async function getQuestionsByCategorySlug(slug) {
  const category = await Category.findOne({ slug });

  if (!category) {
    throw createHttpError(404, 'Category not found');
  }

  const questions = await Question.find({ category: category._id });

  const filterQuestions = questions.map(question => {
    const obj = question.toObject();

    obj.answers = obj.answers.map(answer => {
      return {
        _id: answer._id,
        text: answer.text,
      };
    });
    return obj;
  });

  return { questions: filterQuestions, category };
}
