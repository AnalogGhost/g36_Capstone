'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Promise = require('bluebird');
//TODO: still need to create user schema
const User = require('./src/usersSchema.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['supersecretkey'],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));

app.use((req,res,next) => {
  if (req.session.user) {
    console.log('User is logged in', req.session.user);
    next();
  } else {
      next(); // To Allow Access
      // res.sendStatus(401); To Prevent Access
  }
})

app.use(express.static('public'));

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/enhancelp');

const usersRoute = require('./routes/users');
app.use('/users', usersRoute);

app.listen('3000', function() {
  console.log('Listening on port', 3000);
});

module.exports = app;
