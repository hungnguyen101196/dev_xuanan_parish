const express = require('express');
const authRouter = express.Router();


// UserController
const UserController = require('../controllers/UserController');
authRouter.route('/users').get(UserController.index);


// UserController
const ContactController = require('../controllers/ContactController');
authRouter.route('/contact').get(ContactController.index);


// NewsController
const NewsController = require('../controllers/NewsController');
authRouter.route('/news').get(NewsController.index);


// NotificationController
const NotificationController = require('../controllers/NotificationController');
authRouter.route('/notification').get(NotificationController.index);

// ParishInformationController
const ParishInformationController = require('../controllers/ParishInformationController');
authRouter.route('/parish-information').get(ParishInformationController.index);

// ShareCornerController
const ShareCornerController = require('../controllers/ShareCornerController');
authRouter.route('/share-corner').get(ShareCornerController.index);

// CommentController
const CommentController = require('../controllers/CommentController');
authRouter.route('/comment').get(CommentController.index);

module.exports = authRouter;