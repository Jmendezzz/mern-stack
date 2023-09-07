import { Router } from "express";
import { AuthController } from "../controllers/AuthController.js";
import { loginValidationMiddleware} from "../middlewares/validations/AuthValidationMiddleware.js";
import { userValidationMiddleware } from "../middlewares/validations/UserValidationMiddleware.js";
import { ValidationChain } from "express-validator";

const router = Router();

const authController = new AuthController();


router.post('/login',loginValidationMiddleware as ValidationChain[], authController.login);

router.post('/register', userValidationMiddleware as ValidationChain[], authController.register);

router.get('/logout',authController.logout);
export default router;