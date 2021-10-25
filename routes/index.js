const express = require('express');
const publicationRoutes = require('./publicationRoutes');
const userRoutes = require('./userRoutes');

const router = express.Router();
router.use('/publications', publicationRoutes);
router.use('/users', userRoutes);

module.exports = router;
