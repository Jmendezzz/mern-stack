import { StatusCodes } from "http-status-codes";
import UserModel from "../models/UserModel.js";
import { encryptPassword, decryptPassword } from "../utils/PasswordUtils.js";
import { UnauthenticatedException } from "../exceptions/CustomException.js";
import { generateJWT } from "../utils/TokenUtils.js";
export class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const isValidUser = user && (await decryptPassword(password, user.password));
        if (!isValidUser) {
            throw new UnauthenticatedException("Invalid credentials");
        }
        const token = generateJWT({ userId: user._id, role: user.role });
        res.cookie("token", token, {
            httpOnly: true,
            expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
            secure: process.env.NODE_ENV === "production"
        });
        res.status(StatusCodes.OK).json({ msg: "User logged in succesfully!" });
    }
    async register(req, res) {
        const user = req.body;
        user.password = await encryptPassword(user.password);
        const userStored = await UserModel.create(user);
        res.status(StatusCodes.CREATED).json({ msg: "User added succesfully!", userStored });
    }
    async logout(req, res) {
        res.clearCookie("token");
        res.status(StatusCodes.OK).json({ msg: "User logged out succesfully!" });
    }
}
