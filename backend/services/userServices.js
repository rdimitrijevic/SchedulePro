const User = require('../models/User');


async function logInFunction (req, res) {
    try {
        await User.findOne({
            email: req.body.email,
            password: req.body.password
        }).exec()
        .then((result) => {
            console.log(result);
            res.json({message: "success"});
        })
        .catch((err) => {
            console.log(err);
            res.send(false);
        })
    } catch (err) {
        console.log(err);
        return false;
    }
}


async function signUpFunction (req, res) {
    await User.count({ email: req.body.email}, (err, count) => {
        if(count > 0){
            res.json({message: "user exists"});
        }
    }); 

    const newUser = new User({
        email: req.body.email,
        password: req.body.password
    });


    await newUser.save().then((doc) => {
        console.log(doc);
        res.json({message: "success"});
    });
}

module.exports = {
    logInFunction,
    signUpFunction
}