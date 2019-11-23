const express = require('express');
const mongoose = require('mongoose');

const appRouter = express();

const User = require('./userRoutes');
const Task = require('./taskRoutes');

const dbConnection =
  "mongodb+srv://lale:skript2019@cluster0-rfuxa.gcp.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(dbConnection, { useNewUrlParser: true})
.then(() => console.log(`Connected successfully`))
.catch((err) => console.log(err));

appRouter.use('/', Task);
appRouter.use('/usr', User);

module.exports = appRouter;