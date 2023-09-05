import { Request, Response } from "express";
import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundException, UnauthorizedError } from "../exceptions/CustomException.js";

type Job = {
  id: number;
  company: string;
  position: string;
};

export class JobController {

  public async getAllJobs(req: Request, res: Response) {
    const jobs = await Job.find({});
    res.json(jobs);
  }

  public async getJobById(req: Request, res: Response) {
    const { id } = req.params;
    const job = await Job.findById(id);

    if (!job) {
      throw new NotFoundException(`No Job founded with id: ${id}`);
    }

    res.status(StatusCodes.OK).json(job);
  }

  public async createJob(req: Request, res: Response) {
    console.log(req.body);
    const job = req.body;
    job.createdBy  = req.body.user.userId;
    const jobStored = await Job.create(job);

    res.status(StatusCodes.CREATED).json({ msg: "Job added succesfully!", jobStored });
  }

  public async updateJob(req: Request, res: Response) {
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

  public async deleteJob(req: Request, res: Response) {
    const { id } = req.params;
    const removedJob = await Job.findByIdAndDelete(id);

    if (!removedJob) {
      throw new NotFoundException("Please send a valid job id");
    }

    res.status(StatusCodes.OK).json(removedJob);
  }
}
