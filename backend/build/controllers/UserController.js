import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { BadRequestException } from "../exceptions/CustomException.js";
export class UserController {
    getCurrentUser = async (req, res) => {
        const user = await UserModel.findById(req.body.user.userId);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        res.status(StatusCodes.OK).json({ user: user });
    };
    updateUser = async (req, res) => {
    };
}
