import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { BadRequestException } from "../exceptions/CustomException.js";
import { CurrentUserDTO } from "../dtos/GetCurrentUserDTO.js";
export class UserController {
    getCurrentUser = async (req, res) => {
        const user = await UserModel.findById(req.body.user.userId);
        if (!user) {
            throw new BadRequestException('User not found');
        }
        const userDTO = new CurrentUserDTO(user, user._id);
        res.status(StatusCodes.OK).json({ user: userDTO });
    };
    updateUser = async (req, res) => {
    };
}
