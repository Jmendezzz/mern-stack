import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import UserModel from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";
import { BadRequestException } from "../exceptions/CustomException.js";
import { CurrentUserDTO } from "../dtos/GetCurrentUserDTO.js";

export class UserController {

    public getCurrentUser = async(req: Request, res: Response) => {
        const user = await UserModel.findById(req.body.user.userId);
        if(!user){
            throw new BadRequestException('User not found');
        }
        const userDTO = new CurrentUserDTO(user, user._id);

        res.status(StatusCodes.OK).json({user: userDTO});
    }
    
    public updateUser = async(req: Request, res: Response) => {
    
    }

}

