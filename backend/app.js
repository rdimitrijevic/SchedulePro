const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const appRouter = require('./routes');

const PORT = 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true;
}));
app.use(appRouter);

const server = http.createServer(app);
server.listen(port);

