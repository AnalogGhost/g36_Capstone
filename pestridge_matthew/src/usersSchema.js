'use strict';

const mongoose = require('mongoose');
// const SwotSchema = require('./src/goalsSchema.js');
// const GoalsSchema = require('./src/swotSchema.js');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Username is required']
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: true
  }
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
