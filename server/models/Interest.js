const { Schema, model } = require('mongoose');

const interestSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    tier: {
      type: Number
    },
    rank: {
      type: Number,
    },
    content: {
      type: String,
    }
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Interest = model('Interest', interestSchema);

module.exports = Interest;
