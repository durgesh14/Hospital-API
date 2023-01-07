const express = require('express');

const router = express.Router();

router.use('/doctor', require('./registration'));

module.exports = router;