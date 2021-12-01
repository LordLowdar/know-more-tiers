const { Schema, model } = require('mongoose');

const tierSchema = new Schema(
  {
    Stier: {
      type: Boolean,
      required: true,
      unique: true,
    },
    Atier: {
      type: Boolean,
      required: true,
      unique: true,
    },
    Btier: {
      type: Boolean,
      required: true,
      unique: true,
    },
    Ctier: {
      type: Boolean,
      required: true,
      unique: true,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const tierList = model('tierList', tierSchema);

module.exports = tierList;
