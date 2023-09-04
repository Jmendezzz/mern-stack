import { Request, Response } from "express";
import { User } from "../models/UserModel.js";
import UserModel from "../models/UserModel.js";
import { encryptPassword, decryptPassword } from "../utils/PasswordUtils.js";
import { UnauthenticatedException } from "../exceptions/CustomException.js";
import { generateJWT } from "../utils/TokenUtils.js";
import { timeStamp } from "console";

type LoginInput = {
  email: string;
  password: string;
};
export class AuthController {
  public async login(req: Request, res: Response) {
    const { email, password } = req.body as LoginInput;
    const user = await UserModel.findOne({ email });

    const isValidUser =
      user && (await decryptPassword(password, user.password));
    if (!isValidUser) {
      throw new UnauthenticatedException("Invalid credentials");
    }

    const token = generateJWT({userId: user._id, role: user.role});
    res.cookie("token", token, {
       httpOnly: true,
       expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
       secure:  process.env.NODE_ENV === "production"
      });
    res.status(200).json({ msg: "User logged in succesfully!" });
  }

  public async register(req: Request, res: Response) {
    const user = req.body as User;
    user.password = await encryptPassword(user.password);
    const userStored = await UserModel.create(user);

    res.status(201).json({ msg: "User added succesfully!", userStored });
  }
}
