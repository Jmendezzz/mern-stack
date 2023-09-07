import { StatusCodes } from "http-status-codes";
export class UserController {
    getCurrentUser = async (req, res) => {
        res.status(StatusCodes.OK).json({ user: req.body.user });
    };
    updateUser = async (req, res) => {
    };
}
