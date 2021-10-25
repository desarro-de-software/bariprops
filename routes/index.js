const express = require("express");
const publicationRoutes = require("./publicationRoutes");
const peopleRoutes = require("./peopleRoutes");
const userRoutes = require('./userRoutes');

const router = express.Router();
router.use("/publications", publicationRoutes);
router.use("/people", peopleRoutes);
router.use('/users', userRoutes);

module.exports = router;
