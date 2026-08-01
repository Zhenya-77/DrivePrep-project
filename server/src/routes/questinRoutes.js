import { Router } from 'express';
import { getQuestions } from '../controllers/questionController.js';

const router = Router();

router.get('/tests/:slug', getQuestions);

export default router;
