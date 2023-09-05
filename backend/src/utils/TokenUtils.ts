import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
import { User } from '../models/UserModel.js';
type TokenPayload = {
    userId: Types.ObjectId;
    role: string;
}

export const generateJWT = (payload: TokenPayload)=>{
    const token = jwt.sign(payload,process.env.JWT_SECRET as string,{
        expiresIn: process.env.JWT_EXPIRES_IN}
        );

    return token;
}  

export const validateJWT = (token: string)=>{
    const decoded = jwt.verify(token,process.env.JWT_SECRET as string);
    return decoded as User;
}