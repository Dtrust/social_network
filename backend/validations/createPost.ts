import { body } from 'express-validator';


export const createPostValidations = [
    body('text', 'Please, enter post text')
        .isString()
        .isLength({
            max: 280,
        })
        .withMessage('Max post lenght is 280 characters'),
];
