import { validationResult } from "express-validator/src/validation-result.js";
import { BadRequestException } from "../../exceptions/CustomException.js";
import { ValidationChain } from "express-validator";
import { NextFunction } from "express";

export const validationMiddleware = (validations:ValidationChain[]) => {
    return [   
        validations,    
        (req: Request, res: Response, next: NextFunction) =>{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                const errorMessages = errors.array().map((error) => error.msg);
                throw new BadRequestException(errorMessages.toString());
            }
            next();
        } 
    ]
}