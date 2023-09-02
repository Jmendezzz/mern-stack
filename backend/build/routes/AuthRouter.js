import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { loginValidationMiddleware, registerValidationMiddleware } from "../middlewares/validations/AuthValidationMiddleware.js";
const router = Router();
const authController = new AuthController();
router.post('/login', loginValidationMiddleware, authController.login);
router.post('/register', registerValidationMiddleware, authController.register);
export default router;
