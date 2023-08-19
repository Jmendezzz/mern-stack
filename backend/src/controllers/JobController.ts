import { Request, Response } from "express";
import Job from '../models/JobModel.js';
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
    try{
      const job = await Job.findById(id);
      res.status(StatusCodes.OK).json(job);

    }catch(error){
      return res.status(StatusCodes.NOT_FOUND).json({ message: `No Job founded with id: ${id}` });
    }

  }

  async createJob(req: Request, res: Response) {
    const job = req.body;
    try{
      const jobStored =  await Job.create(job);
      res.status(StatusCodes.CREATED).json({msg:"Job added succesfully!", jobStored});
    }catch(error){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong');
      
    }
  }

  async updateJob(req: Request, res: Response) {
    const { id } = req.params;
    const dataUpdated = req.body;
    console.log(dataUpdated);
    try{
      const jobUpdated = await Job.findByIdAndUpdate(id, dataUpdated,{
        new:true
      });
      res.status(StatusCodes.OK).json(jobUpdated);

    }catch(error){
      res.status(StatusCodes.BAD_REQUEST).send("Please send a valid job id");

    }

  }

  async deleteJob(req: Request, res: Response) {
    const { id } = req.params;

    try{
      const removedJob = await Job.findByIdAndDelete(id);
      res.status(StatusCodes.OK).json(removedJob);
    }catch(error){
      res.status(StatusCodes.BAD_REQUEST).send("Please send a valid job id");
    }
  }

}
