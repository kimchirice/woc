const router = require('express').Router();
const controller = require('../controller/auth.controller');
const validAuth = require('../validator/auth.validate');
const { validate } = require('../validator/runValidator');

const NAMESPACE = 'AUTH ROUTE';
/* 
    authentication routes
    would only contains open routes (no token needed)
*/

router.post(
    '/checkemail',
    validate(validAuth.emailCheck),
    controller.checkEmail
);

router.post('/login', validate(validAuth.login), controller.login); // v - email, password
router.post('/signup', controller.signup); // v - register data

module.exports = router;
