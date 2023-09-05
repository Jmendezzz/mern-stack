import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import UserModel from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";

export class UserController {

    public getCurrentUser = async(req: Request, res: Response) => {

        res.status(StatusCodes.OK).json({user: req.body.user});
    }
    
    public updateUser = async(req: Request, res: Response) => {
    
    }

}

