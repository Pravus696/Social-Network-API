import { Router } from 'express';
import userRouter  from './userRoute.js';
import thoughtRouter from './thoughtRoute.js';

const router = Router();

router.use('/users', userRouter);
router.use('/thoughts', thoughtRouter);

export default router;