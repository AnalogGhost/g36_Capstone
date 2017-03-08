'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalsSchema = new Schema({
  shortdescription: {
    type: String
  },
  longdescription: {
    type: String
  },
  duedate: {
    type: Date
  }
});

const Goal = mongoose.model('Goal', GoalsSchema);

module.exports = Goal;
