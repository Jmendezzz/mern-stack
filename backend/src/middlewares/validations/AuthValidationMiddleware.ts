import { body } from "express-validator";
import { validationMiddleware } from "./ValidationMiddleware.js";
import { Roles } from "../../enums/RolesEnum.js";
import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../../exceptions/CustomException.js";


const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .notEmpty()
        .withMessage('The password field is required')
];


export const loginValidationMiddleware = validationMiddleware(loginValidations);


export const authorizePermissions = (...roles: Roles[]) =>{

    return (req: Request,res:Response,next:NextFunction)=>{

        if(!roles.includes(req.body.user.role)){
            throw new UnauthorizedException('You are not authorized!');
        }
        next();
    }
}