import { BadRequestException } from "../../exceptions/CustomException.js";
import UserModel from "../../models/UserModel.js";
import { validationMiddleware } from "./ValidationMiddleware.js";
import { body } from "express-validator";
const userInputValidations = [
    body('name')
        .notEmpty()
        .withMessage('The name field is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('The name field must be between 3 and 50 characters'),
    body('lastName')
        .notEmpty()
        .withMessage('The lastName field is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('The last name field must be between 3 and 50 characters'),
    body('email')
        .notEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Invalid email')
        .custom(async (email) => {
        const user = await UserModel.findOne({ email });
        if (user) {
            throw new BadRequestException('The email is already taken');
        }
    }),
    body('password')
        .notEmpty()
        .withMessage('The password field is required')
        .isLength({ min: 6, max: 50 })
        .withMessage('The password field must be between 6 and 50 characters'),
    body('location')
        .notEmpty()
        .withMessage('The location field is required')
];
export const userValidationMiddleware = validationMiddleware(userInputValidations);
