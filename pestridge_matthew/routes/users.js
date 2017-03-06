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

router.get('/loggedIn',(req,res,next) => {
  console.log('Is Authenticated');
  if (req.session.user) {
    res.send();
  } else {
    res.sendStatus(401);
  }
});

router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(data);
    }
  })
});

router.get('/:id/swot', (req, res) => {
  if (req.session.user !== req.params.id) {
    return res.sendStatus(401);
  }

  res.send("All Good!");

  // User.findById(req.params.id, (err, data) => {
  //   if (err) {
  //     res.sendStatus(404);
  //   } else {
  //     res.send(data);
  //   }
  // })
});

// router.post('/:id/swot', (req, res) => {
//   User.findById(req.params.id, (err, data) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.send(data);
//     }
//   })
// });
//
// router.get('/:id/goals', (req, res) => {
//   User.findById(req.params.id, (err, data) => {
//     if (err) {
//       res.sendStatus(404);
//     } else {
//       res.send(data);
//     }
//   })
// });

//New User of Register route
router.post('/register', (req, res) => {
  bcrypt.hash(req.body.password,8).then(hash => {
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
    }, (err, data) => {
      if (err) {
        throw err;
      };
      req.session.user = data._id;
      res.send(data);
    })
  })
  .catch(err => next(err));
});

//Returning User or Login route
router.post('/login',(req,res) => {
  User.findOne({ 'email': req.body.email }, (err,data) => {
    var validPassword = bcrypt.compareSync(req.body.password, data.password);
    req.session.user = data._id;
    res.send(data);
    }
  )
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
