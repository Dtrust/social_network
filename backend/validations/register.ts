import { body } from 'express-validator';


export const registerValidations = [
  body('email', 'Please, enter your Email')
    .isEmail()
    .withMessage('Incorrect Email address. Please, try again with another Email')
    .isLength({
      min: 10,
      max: 40,
    })
    .withMessage('Incorrect Email lenght. The allowed number of characters is from 10 to 40'),
  body('fullname', 'Please, enter your Name')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('Incorrect Name lenght. The allowed number of characters is from 2 to 40'),
  body('username', 'Please, enter your Login')
    .isString()
    .isLength({
      min: 2,
      max: 40,
    })
    .withMessage('Incorrect Login lenght. The allowed number of characters is from 2 to 40'),
  body('password', 'Please, enter your Password')
    .isString()
    .isLength({
      min: 6,
    })
    .withMessage('Incorrect Password lenght. Minimum number of characters is 6')
    .custom((value, { req }) => {
      if (value !== req.body.password2) {
        throw new Error('Passwords do not match');
      } else {
        return value;
      }
    }),
];
