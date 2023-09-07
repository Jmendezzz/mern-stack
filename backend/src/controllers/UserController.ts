import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import UserModel from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";
import { BadRequestException } from "../exceptions/CustomException.js";

export class UserController {

    public getCurrentUser = async(req: Request, res: Response) => {
        const user = await UserModel.findById(req.body.user.userId);
        if(!user){
            throw new BadRequestException('User not found');
        }

        res.status(StatusCodes.OK).json({user: user});
    }
    
    public updateUser = async(req: Request, res: Response) => {
    
    }

}

