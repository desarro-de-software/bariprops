const express = require("express");
const publicationController = require("../controllers/publicationController");

const publicationRouter = express.Router();
publicationRouter.get("/", publicationController.getPublications);

module.exports = publicationRouter;
