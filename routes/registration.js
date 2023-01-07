const express = require('express');

const router = express.Router();

const registrationController = require('../controllers/registration_controller');


router.post('/register', registrationController.register);


module.exports = router;