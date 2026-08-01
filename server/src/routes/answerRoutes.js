import { celebrate } from 'celebrate';
import { Router } from 'express';
import { answerSchema } from '../validations/answerValidation.js';
import { checkAnswer } from '../controllers/answerController.js';

const router = Router();

router.post('/answers/check', celebrate(answerSchema), checkAnswer);

export default router;
