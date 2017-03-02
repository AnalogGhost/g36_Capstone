'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalsSchema = new Schema({
  shortDescription: {
    type: String
  },
  longDescription: {
    type: String
  },
  dueDate: {
    type: Date
  }
});

module.exports = GoalsSchema;
