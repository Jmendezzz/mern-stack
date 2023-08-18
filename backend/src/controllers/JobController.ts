import { Request, Response } from "express";
import Job from '../models/JobModel.js';

type Job = {
  id: number;
  company: string;
  position: string;
};

export class JobController {
  
	id = 2;
	jobs: Array<Job> = [];
  async getAllJobs(req: Request, res: Response) {
    // res.json(this.jobs);

		res.status(200).send('Executed');
  }

  async getJobById(req: Request, res: Response) {
    const { id } = req.params;
    const job = this.jobs.find((job) => job.id === parseInt(id));
    if (!job) {
      return res.status(404).json({ message: `No Job founded with id: ${id}` });
    }
    res.status(200).json(job);
  }

  async createJob(req: Request, res: Response) {
    const job = req.body;
		const jobStored =  await Job.create(job);
    res.status(201).json({msg:"Job added succesfully!", jobStored});
  }

  async updateJob(req: Request, res: Response) {
    const { id } = req.params;
    const job = this.jobs.find((job) => job.id == parseInt(id));
    if (!job) {
      res.status(400).send("Please send a valid job id");
      return;
    }
    const jobUpdated = req.body;
    if (!jobUpdated.company || !jobUpdated.position) {
      res.status(400).send("Please fill the job's company and position");
      return;
    }
    job.company = jobUpdated.company;
    job.position = jobUpdated.position;

    res.status(200).json(job);
  }

  async deleteJob(req: Request, res: Response) {
    const { id } = req.params;
    const job = this.jobs.find((job) => job.id == parseInt(id));
    if (!job) {
      res.status(400).send("Please send a valid job id");
      return;
    }
    this.jobs = this.jobs.filter((job) => job.id != parseInt(id));
    res.status(200).send("Job deleted");
  }
}
