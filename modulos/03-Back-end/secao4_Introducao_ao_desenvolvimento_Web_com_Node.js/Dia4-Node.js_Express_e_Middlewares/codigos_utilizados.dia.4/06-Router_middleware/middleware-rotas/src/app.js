const express = require('express');

const routers = require('./routers');

const app = express();

app.use(routers);

module.exports = app;
