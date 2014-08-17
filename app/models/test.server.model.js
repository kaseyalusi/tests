'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Test Schema
 */

var TestSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
      type: String,
      default: '',
      trim: true,
      required: 'Title cannot be blank'
  },
  content: {
      type: none,
      default: null,
  },
  tags: {
      type: [String],
      default: {},
}
});
