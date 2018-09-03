const express = require('express');
const defaultRouter = express.Router();


// LoginController
const LoginController = require('../controllers/LoginController');
defaultRouter.route('/login').get(LoginController.index);
defaultRouter.route('/login').post(LoginController.login);

module.exports = defaultRouter;