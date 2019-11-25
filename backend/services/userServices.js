const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

async function logInFunction(req, res) {
    await User.findOne({email: req.body.email})
        .then((doc) => {
            if(!doc){
                console.log("no user");
                res.json({error: "User doesn't exist"});
            } else {
                console.log("trying user log in");
                bcrypt.compare(req.body.password, doc.password, (err, succes) => {
                    if(err) throw err;
                    if(succes){
                        const token = jwt.sign({id: doc.id}, 'skript2019', {
                            expiresIn: '24h'
                        });

                        res.json({ token, doc });
                    } else {
                        res.json({error: "Incorrect password"});
                    }
                })
            }
        })
        .catch(err => console.log(err));
}

async function signUpFunction(req, res) {
  await User.count({ email: req.body.email }).then(count => {
    if (count > 0) {
      res.status(400);
      res.json({ error: "Username allready exists" });
      console.log("user exists count: " + count);
      return;
    } else {
      console.log("creating user " + req.body.email + " " + req.body.password);
      const newUser = new User({
        email: req.body.email,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;

          newUser.password = hash;
          newUser
            .save()
            .then(() => {
              res.status(201);
              res.send({ message: "User created" });
            })
            .catch(err => {
              console.log("this: =======" + err);
            });
        });
      });
    }
  });
}

module.exports = {
  logInFunction,
  signUpFunction
};
