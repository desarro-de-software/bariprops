const express = require("express");
const publicationRoutes = require("./publicationRoutes");
const peopleRoutes = require("./peopleRoutes");

const router = express.Router();
router.use("/publications", publicationRoutes);
router.use("/people", peopleRoutes);

module.exports = router;
