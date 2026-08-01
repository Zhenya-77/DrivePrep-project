import { Router } from 'express';

import { celebrate } from 'celebrate';
import { getRulesSchema } from '../validations/rulesValidation.js';
import { getRulesBySlug } from '../controllers/rulesController.js';

const router = Router();

router.get('/rules/:slug', celebrate(getRulesSchema), getRulesBySlug);

export default router;
