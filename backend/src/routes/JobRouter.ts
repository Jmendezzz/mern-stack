import { Router } from "express";
import { API_BASE_URL } from "../index.js";
import { JobController } from "../controllers/JobController.js";

const router  = Router();


router.get( `${API_BASE_URL}/jobs`, JobController.getAllJobs);

router.get( `${API_BASE_URL}/jobs/:id`, JobController.getJobById);

router.post(`${API_BASE_URL}/jobs`, JobController.createJob);

router.put(`${API_BASE_URL}/jobs/:id`, JobController.updateJob);

router.delete(`${API_BASE_URL}/jobs/:id`, JobController.deleteJob);


export default router;