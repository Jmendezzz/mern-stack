import { Request, Response } from "express";
import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundException } from "../exceptions/CustomException.js";

type Job = {
  id: number;
  company: string;
  position: string;
};

export class JobController {
  id = 2;
  jobs: Array<Job> = [];
  async getAllJobs(req: Request, res: Response) {
    const jobs = await Job.find({});
    res.json(jobs);
  }

  async getJobById(req: Request, res: Response) {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      throw new NotFoundException(`No Job founded with id: ${id}`);
    }

    res.status(StatusCodes.OK).json(job);
  }

  async createJob(req: Request, res: Response) {
    const job = req.body;
    const jobStored = await Job.create(job);

    res.status(StatusCodes.CREATED).json({ msg: "Job added succesfully!", jobStored });
  }

  async updateJob(req: Request, res: Response) {
    const { id } = req.params;
    const dataUpdated = req.body;
    const jobUpdated = await Job.findByIdAndUpdate(id, dataUpdated, {
      new: true,
    });

    if (!jobUpdated) {
      throw new NotFoundException("Please send a valid job id");
    }

    res.status(StatusCodes.OK).json(jobUpdated);

  }

  async deleteJob(req: Request, res: Response) {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);

    if (!removedJob) {
      throw new NotFoundException("Please send a valid job id");
    }

    res.status(StatusCodes.OK).json(removedJob);
  }
}
