import { UnauthenticatedException } from "../exceptions/CustomException.js";
import { validateJWT } from "../utils/TokenUtils.js";
export const authenticateUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        throw new UnauthenticatedException("You are not authenticated, please login");
    }
    try {
        const { userId, role } = validateJWT(token);
        req.body.user = { userId, role };
        next();
    }
    catch (error) {
        throw new UnauthenticatedException("You are not authenticated, please login");
    }
};
