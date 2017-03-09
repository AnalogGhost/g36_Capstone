'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/usersSchema');
const Plan = require('../src/swotSchema');
const Goal = require('../src/goalsSchema');
const bcrypt = require('bcrypt');

mongoose.Promise = require('bluebird');

router.get('/', (req, res) => {
  Goal.find({ userid: req.session.user }, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  Goal.create({
    shortdescription: req.body.shortdescription,
    longdescription: req.body.longdescription,
    duedate: req.body.duedate,
    userid: req.session.user
  }, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  })
});

module.exports = router;
