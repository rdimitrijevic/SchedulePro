const express = require('express');

const router = express.Router();

const user = require('../services/userServices');

router.get('/login', user.logInFunction);

router.post('/signup', user.signUpFunction);

module.exports = router;