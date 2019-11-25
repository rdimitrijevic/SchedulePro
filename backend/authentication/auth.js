const jwt = require('jsonwebtoken');
const User = require('../models/User');

function authenticated (req, res, next) {
    const decoded = jwt.verify(req.get('X-jwt-token'), 'skript2019');
  
    User.findById(decoded.id, (err, user) => {
      if (err) {
        return res.status(400).json({
          message: 'An error has occured.'
        });
      }
      if (!user) {
        return res.status(401).json({
          message: 'Unauthorized.'
        });
      }
      req.user = user;
      next();
    })
  }

  module.exports = {
      authenticated
  };