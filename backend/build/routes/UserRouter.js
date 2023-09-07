import { Router } from "express";
import { UserController } from "../controllers/UserController.js";
const router = Router();
const userController = new UserController();
router.get('/current-user', userController.getCurrentUser);
router.put('/update', userController.updateUser);
