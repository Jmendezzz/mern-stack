import { Router } from "express";
import { StatsController } from "../controllers/StatsController.js";
import { authorizePermissions } from "../middlewares/validations/AuthValidationMiddleware.js";
import { Roles } from "../enums/RolesEnum.js";
const router = Router();
const statsController = new StatsController();
router.get('/', [authorizePermissions(Roles.ADMIN), statsController.getStats]);
export default router;
