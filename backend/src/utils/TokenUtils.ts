import jwt from 'jsonwebtoken';
import { Types } from 'mongoose';
type TokenPayload = {
    userId: Types.ObjectId;
    role: string;
}

export const generateJWT = (payload: TokenPayload)=>{
    const token = jwt.sign(payload,'secret',{
        expiresIn: '1d'}
        );

    return token;
}