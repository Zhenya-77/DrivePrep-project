import createHttpError from 'http-errors';
import { Rule } from '../models/rule.js';
import { Category } from '../models/category.js';

export async function getRulesBySlug(req, res) {
  const { slug } = req.params;
  const { page, perPage } = req.query;

  const skip = (page - 1) * perPage;

  const category = await Category.findOne({ slug });

  if (!category) {
    throw createHttpError(404, 'Category not found');
  }

  const rulesQuery = Rule.find({ category: category._id });

  const [totalItems, rules] = await Promise.all([
    rulesQuery.clone().countDocuments(),
    rulesQuery.skip(skip).limit(perPage),
  ]);

  if (totalItems === 0) {
    throw createHttpError(404, 'Rules not found');
  }

  const totalPages = Math.ceil(totalItems / perPage);

  res
    .status(200)
    .json({ page, perPage, totalItems, totalPages, rules, category });
}
