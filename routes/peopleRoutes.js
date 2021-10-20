const express = require("express");
const peopleController = require("../controllers/peopleController");

const peopleRouter = express.Router();
peopleRouter.get("/", peopleController.getPeople);

module.exports = peopleRouter;
