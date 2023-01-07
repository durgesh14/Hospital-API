const express = require('express');

const router = express.Router();

router.use('/doctor', require('./registration'));

router.use('/doctor', require('./login'));

module.exports = router;