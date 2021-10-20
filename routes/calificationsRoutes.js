const express = require('express');
const calificationController = require('../controllers/calificationsController');

const calificationRouter = express.Router();
calificationRouter.get(
    '/',
    calificationController.getCalifications,
);

module.exports = calificationRouter;
