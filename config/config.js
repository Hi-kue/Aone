const express = require('express');
const path = require('path');
const fileURLToPath = require('url');
const indexRouter = require('../routes/index.js');

const app = express();

// Setting Express Configurations
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules')));

// Middleware Route
app.use('/', indexRouter);

module.exports = app;