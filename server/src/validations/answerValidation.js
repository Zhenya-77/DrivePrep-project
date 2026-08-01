import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  return !isValidObjectId(value) ? helpers.message('Invalid id format') : value;
};

export const answerSchema = {
  [Segments.BODY]: Joi.object({
    questionId: Joi.string().custom(objectIdValidator).required(),
    answerId: Joi.string().custom(objectIdValidator).required(),
  }),
};
