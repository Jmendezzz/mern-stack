import { Router } from "express";
import { JobController} from "../controllers/JobController.js";
import { jobValidationMiddleware } from "../middlewares/validations/JobValidationMiddleware.js";

const router  =  Router();

const jobController = new JobController();

router.get( `/`, jobController.getAllJobs);

router.get( `/:id`,  jobController.getJobById);

router.post(`/`, jobValidationMiddleware, jobController.createJob);   

router.put(`/:id`, jobValidationMiddleware, jobController.updateJob);

router.delete(`/:id`, jobController.deleteJob);


export default router;