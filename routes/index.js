const express = require("express");
const publicationRoutes = require("./publicationRoutes");
const peopleRoutes = require("./peopleRoutes");
const calificationRoutes = require('./calificationsRoutes')

const router = express.Router();
router.use("/publications", publicationRoutes);
router.use("/people", peopleRoutes);
router.use('/califications', calificationRoutes);

module.exports = router;
