import { Router } from "express";
import { JobController} from "../controllers/JobController.js";

const router  =  Router();

const jobController = new JobController();

router.get( `/`, jobController.getAllJobs);

router.get( `/:id`, jobController.getJobById);

router.post(`/`, jobController.createJob);   

router.put(`/:id`, jobController.updateJob);

router.delete(`/:id`, jobController.deleteJob);


export default router;