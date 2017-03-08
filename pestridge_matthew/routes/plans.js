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
  Plan.find({ 'userid': req.session.user }, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  Plan.create({
    description: req.body.description,
    lifecategory: req.body.lifecategory,
    swotcategory: req.body.swotcategory,
    impact: req.body.impact,
    userid: req.session.user
  }, (err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  })
});

// router.patch('/:id', (req, res) => {
//   Plan.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, data) {
//     if (err) {
//       throw err;
//     }
//     res.send(data);
//   });
// });

module.exports = router;
