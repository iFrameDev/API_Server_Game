import { Router } from "express";
import { UserController } from './user.controller'; 

const userRouter = Router();
const userController = new UserController();


userRouter.get('/checkcharacter', userController.GetUserCharacterRequest);

export default userRouter;
