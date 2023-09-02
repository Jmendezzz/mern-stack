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
        res.status(200).json({ msg: "User logged in succesfully!", token });
    }
    async register(req, res) {
        const user = req.body;
        user.password = await encryptPassword(user.password);
        const userStored = await UserModel.create(user);
        res.status(201).json({ msg: "User added succesfully!", userStored });
    }
}
