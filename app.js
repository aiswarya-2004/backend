var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./db/mongodb');
var cors = require('cors')
var hello = "sfdsa"

var adminRouter = require('./routes/admin');
var usersRouter = require('./routes/users');
const { access } = require('fs');

var app = express();

// const corsOptions = {
//     origin: 'http://localhost/3000',
//     optionsSuccessStatus: 200,
// };

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
// app.use('/users', usersRouter);

module.exports = app;
