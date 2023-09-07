import JobModel from "../models/JobModel.js";
import UserModel from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
export class StatsController {
    async getStats(req, res) {
        const users = UserModel.countDocuments();
        const jobs = JobModel.countDocuments();
        res.status(StatusCodes.OK).json({ users, jobs });
    }
}
