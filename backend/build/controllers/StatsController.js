import JobModel from "../models/JobModel.js";
import UserModel from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
export class StatsController {
    async getStats(req, res) {
        const users = await UserModel.countDocuments();
        const jobs = await JobModel.countDocuments();
        console.log(users, jobs);
        res.status(StatusCodes.OK).json({ users, jobs });
    }
}
