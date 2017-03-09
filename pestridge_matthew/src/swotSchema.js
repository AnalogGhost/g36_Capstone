'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlanningSchema = new Schema({
  description: {
    type: String
  },
  lifecategory: {
    type: String
  },
  swotcategory: {
    type: String
  },
  impact: {
    type: Number
  },
  userid: {
    type: String
  }
});

const Plan = mongoose.model('Plan', PlanningSchema)

module.exports = Plan;
