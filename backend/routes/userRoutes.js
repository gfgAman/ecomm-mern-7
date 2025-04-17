import express from 'express';
import userController from '../controller/userContoller.js';

export const userRouter = express.Router()

userRouter.get('/users-data',userController)