import express from 'express';
import { handleUserSignup, handleUserLogin } from '../controllers/userData.js';
const userRouter = express.Router();

userRouter.post('/login', handleUserLogin)
userRouter.post('/signup', handleUserSignup)

export { userRouter };