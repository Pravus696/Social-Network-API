import { Router } from 'express';
import userRouter  from './api/userRoute.js';
import thoughtRouter from './api/thoughtRoute.js';

const router = Router();

router.use('/users', userRouter);
router.use('/thoughts', thoughtRouter);

export default router;