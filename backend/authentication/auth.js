const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Task = require('../models/Task');

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


  function deleteAuthenticated( req , res, next ) {
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
      Task.findById(req.params.id, (err, task) => {
        if(task.owner_email === user.email)
          next();
        else return res.status(400).json({
          error: 'Unautorized'
        });
      })
    })
  }

  module.exports = {
      authenticated,
      deleteAuthenticated
  };