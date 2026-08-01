import { getQuestionsByCategorySlug } from '../services/question.js';

export async function getQuestions(req, res) {
  const { slug } = req.params;

  const data = await getQuestionsByCategorySlug(slug);

  res.status(200).json(data);
}
