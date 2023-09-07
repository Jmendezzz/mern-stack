import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import UserModel, { User } from "../models/UserModel.js";
import JobModel from "../models/JobModel.js";
import { BadRequestException } from "../exceptions/CustomException.js";
import { CurrentUserDTO } from "../dtos/GetCurrentUserDTO.js";
import { encryptPassword } from "../utils/PasswordUtils.js";

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
        const user = req.body;
        user.password = await encryptPassword(user.password);
        const userUpdated = await  UserModel.findByIdAndUpdate(user._id, user) as User; 
        
        const userUpdatedDTO = new CurrentUserDTO(userUpdated,user._id);
        return res.status(StatusCodes.OK).json({user: userUpdatedDTO});
    }

}

