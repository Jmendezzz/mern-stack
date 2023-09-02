import jwt from 'jsonwebtoken';
export const generateJWT = (payload) => {
    const token = jwt.sign(payload, 'secret', {
        expiresIn: '1d'
    });
    return token;
};
