import { Request, Response } from "express";
import { User } from "../models/UserModel.js";
import UserModel from "../models/UserModel.js";
import { encryptPassword } from "../utils/PasswordUtils.js";

type LoginInput = {
    email: string;
    password: string;
}
export class AuthController{

    public async login(req: Request, res: Response){
        const {email, password} = req.body as LoginInput;
    }

    public async register(req: Request, res: Response){
        const user = req.body as User;
        user.password = await encryptPassword(user.password);
        const userStored = await UserModel.create(user);

        res.status(201).json({msg: "User added succesfully!", userStored});

    
    }
}