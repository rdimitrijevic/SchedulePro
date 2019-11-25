const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

const appRouter = require("./routes/index");

const port = 3000;

const app = express();

const history = require('connect-history-api-fallback');

const staticMiddleware = express.static(path.join(__dirname, 'dist'));
app.use(staticMiddleware);
app.use(history());
app.use(staticMiddleware);


app.use(cors({
  credentials: false,
  origin:"http://localhost:8080"
}));  
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(appRouter);


app.listen(port, () => console.log(`Connected successfully to port ${port}`));
