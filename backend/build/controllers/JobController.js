import Job from "../models/JobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundException } from "../exceptions/CustomException.js";
export class JobController {
    async getAllJobs(req, res) {
        const jobs = await Job.find({});
        res.json(jobs);
    }
    async getJobById(req, res) {
        const { id } = req.params;
        const job = await Job.findById(id);
        if (!job) {
            throw new NotFoundException(`No Job founded with id: ${id}`);
        }
        res.status(StatusCodes.OK).json(job);
    }
    async createJob(req, res) {
        console.log(req.body);
        const job = req.body;
        job.createdBy = req.body.user.userId;
        const jobStored = await Job.create(job);
        res.status(StatusCodes.CREATED).json({ msg: "Job added succesfully!", jobStored });
    }
    async updateJob(req, res) {
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
    async deleteJob(req, res) {
        const { id } = req.params;
        const removedJob = await Job.findByIdAndDelete(id);
        if (!removedJob) {
            throw new NotFoundException("Please send a valid job id");
        }
        res.status(StatusCodes.OK).json(removedJob);
    }
}
