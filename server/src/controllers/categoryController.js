import createHttpError from 'http-errors';
import { Category } from '../models/category.js';

export async function getCategories(req, res) {
  const nameCategories = await Category.find();

  res.status(200).json(nameCategories);
}

export async function getCategoryBySlug(req, res) {
  const { slug } = req.params;

  const category = await Category.findOne({ slug });

  if (!category) {
    throw createHttpError(404, 'Category not found');
  }

  res.status(200).json(category);
}
