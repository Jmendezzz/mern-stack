import { Request, Response } from "express";
import JobModel from "../models/JobModel.js";
import UserModel from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";

export class StatsController{

    public async getStats(req: Request, res: Response ){
        const users = await UserModel.countDocuments();
        const jobs = await  JobModel.countDocuments();

        res.status(StatusCodes.OK).json({users,jobs})
    }

}