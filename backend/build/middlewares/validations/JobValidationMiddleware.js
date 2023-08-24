import { body } from "express-validator";
import { JobStatus } from "../../enums/JobStatusEnum.js";
import { JobType } from "../../enums/JobTypeEnum.js";
import { validationMiddleware } from "./ValidationMiddleware.js";
const jobValidations = [
    body('company')
        .notEmpty()
        .withMessage('The company field is required')
        .isLength({ min: 3, max: 50 })
        .withMessage('The company field must be between 3 and 50 characters'),
    body('position')
        .notEmpty()
        .withMessage('The position field is required'),
    body('jobLocation')
        .notEmpty()
        .withMessage('The job location field is required'),
    body('jobStatus')
        .isIn(Object.values(JobStatus))
        .withMessage('Invalid job status'),
    body('jobType')
        .isIn(Object.values(JobType))
        .withMessage('Invalid job status'),
];
export const jobValidationMiddleware = validationMiddleware(jobValidations);
