import { Router } from 'express';
import {
  logoutUser,
  registerUser,
  userLogin,
} from '../controllers/auth.controller';

const router = Router();

router.post('/register', registerUser);
router.post('/login', userLogin);
router.get('/logout', logoutUser);

export default router;
