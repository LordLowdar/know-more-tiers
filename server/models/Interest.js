const mongoose = require('mongoose');

const { Schema } = mongoose;

const interestSchema = new Schema({

  interestName: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String
  }
});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;
