const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const appRouter = require("./routes/index");

const port = 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(appRouter);


app.listen(port, () => console.log(`Connected successfully to port ${port}`));
