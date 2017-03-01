'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const Promise = require("bluebird");
//TODO: still need to create user schema
// const User =

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

// const usersRoute = require('./routes/users');
// app.use('/users', usersRoute);

app.listen('3000', function() {
  console.log('Listening on port', 3000);
});
