'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Promise = require('bluebird');
//TODO: still need to create user schema
const User = require('./src/usersSchema.js');
const Plan = require('./src/swotSchema.js')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


let cookieSession = require('cookie-session')
app.use(cookieSession({
  name: 'session',
  keys: ['supersecretkey'],
  // Cookie Options
  maxAge: 1 * 60 * 60 * 1000 // 1 hour
}));

app.use((req,res,next) => {
  if (req.session.user) {
    next();
  } else {
      next(); // To Allow Access
      // res.sendStatus(401); To Prevent Access
  }
})

app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = require('bluebird');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/enhancelp');

const usersRoute = require('./routes/users');
const plansRoute = require('./routes/plans');
const goalsRoute = require('./routes/goals')
app.use('/users', usersRoute);
app.use('/plans', plansRoute);
app.use('/goals', goalsRoute);

app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'public')})
})

app.listen('3000', function() {
  console.log('Listening on port', 3000);
});

module.exports = app;
