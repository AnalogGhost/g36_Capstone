'use strict';

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../src/usersSchema');
const bcrypt = require('bcrypt');

mongoose.Promise = require('bluebird');

router.get('/', (req,res) => {
  User.find((err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  })
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      res.send(404);
    } else {
      res.send(data);
    }
  })
});

router.post('/', (req, res) => {
  bcrypt.hash(req.body.password,8).then(hash => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    }, (err, data) => {
      if (err) {
        throw err;
      };

      req.session.userId = data._id;
      console.log(req.session);
      res.send(data);

    })
  })
  .catch(err => next(err));
});

router.patch('/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }, function (err, data) {
    if (err) {
      throw err;
    }
    res.send(data);
  });
});

router.delete('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      throw err;
    }
    data.remove((err, data) => {
      if (err) {
        throw err;
      }
      res.send(data);
    })
  })
})

module.exports = router;
