import { Router } from 'express';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use('/profile', authenticate);
export default router;
