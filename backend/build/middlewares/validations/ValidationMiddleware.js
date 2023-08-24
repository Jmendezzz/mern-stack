import { validationResult } from "express-validator/src/validation-result.js";
import { BadRequestException } from "../../exceptions/CustomException.js";
export const validationMiddleware = (validations) => {
    return [
        validations,
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const errorMessages = errors.array().map((error) => error.msg);
                throw new BadRequestException(errorMessages.toString());
            }
            next();
        }
    ];
};
