const express = require('express');
const publicationRoutes = require('./publicationRoutes');

const router = express.Router();
router.use('/publications', publicationRoutes);

module.exports = router;