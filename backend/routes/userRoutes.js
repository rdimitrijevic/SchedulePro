const express = require('express');

const router = express.Router();

const user = require('../services/userServices');

router.post('/login', user.logInFunction);

router.post('/sign-up', user.signUpFunction);

module.exports = router;