import { Router } from 'express';

import {
  updateUserAvatar,
  updateUserProfile,
} from '../controllers/userController.js';
import { authenticate } from '../middlewares/authenticate.js';
import { upload } from '../middlewares/multer.js';
import { celebrate } from 'celebrate';
import { updateUserSchema } from '../validations/authValidation.js';

const router = Router();

router.patch(
  '/users/me/avatar',
  authenticate,
  upload.single('avatar'),
  updateUserAvatar
);
router.patch(
  '/users/me',
  authenticate,
  celebrate(updateUserSchema),
  updateUserProfile
);

export default router;
