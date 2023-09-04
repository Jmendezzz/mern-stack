import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
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