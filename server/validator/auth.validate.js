const { check } = require('express-validator');

/*
    validation rules for user authentication
    containing:
    - checkEmail
    - login
    - sign i
*/

const emailCheck = [
    check('email')
        .not()
        .isEmpty()
        .isLength({ max: 50 })
        .isEmail()
        .withMessage('Must be Valid email address'),
];

const login = [
    check('email')
        .not()
        .isEmpty()
        .isLength({ max: 50 })
        .isEmail()
        .withMessage('Message must be Valid email address'),
    check('password').not().isEmpty().withMessage('Invalid Password Format'),
];

// double check the form/ data structure to see whats required and what is not
const signup = [];

module.exports = {
    emailCheck,
    login,
    signup,
};
