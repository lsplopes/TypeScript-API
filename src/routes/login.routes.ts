import { Router } from 'express';

import userController from '../controllers/userController';
import validateBody from '../middlewares/userMiddleware';

const router = Router();

router.post('/', validateBody, userController.login);

export default router;
