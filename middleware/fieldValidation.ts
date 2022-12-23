import { body } from 'express-validator'


const fieldValidation =  [
  body('name').not().isEmpty().withMessage('name is required'),
  body('email')
    .not().isEmpty().withMessage('email is required')
    .isEmail().withMessage('Is not an Email'),
  body('password')
    .not().isEmpty().withMessage('password is required')
    .isLength({ min: 5 }).withMessage('password length cannot be less than 5')
]

export default fieldValidation;