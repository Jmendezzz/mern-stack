import { body } from "express-validator";
import { validationMiddleware } from "./ValidationMiddleware.js";


const loginValidations = [
    body('email')
        .notEmpty()
        .withMessage('The email field is required'),
    body('password')
        .notEmpty()
        .withMessage('The password field is required')
];

const registerValidations =  [
    body('name')
        .notEmpty()
        .withMessage('The name field is required')
        .isLength({min:3, max:50})
        .withMessage('The name field must be between 3 and 50 characters'),
    body('lastName')
        .notEmpty()
        .withMessage('The lastName field is required')
        .isLength({min:3, max:50})
        .withMessage('The last name field must be between 3 and 50 characters'),
    body('email')
        .notEmpty()
        .withMessage('The email field is required')
        .isEmail()
        .withMessage('Invalid email'),
    body('password')
        .notEmpty()
        .withMessage('The password field is required')
        .isLength({min:6, max:50})
        .withMessage('The password field must be between 6 and 50 characters'),
    body('location')
        .notEmpty()
        .withMessage('The location field is required')
];