const express = require('express');

const app = express();
const PORT = process.env.PORT || 8081;

const htmlRouter = require('./routes/html-routes');
const apiRouter = require('./routes/api-routes');