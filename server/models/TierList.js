const mongoose = require('mongoose');
const Interest = require('./Interest');

const { Schema } = mongoose;

const TierListSchema = new Schema({
    tierListName: {
        type: String,
        default: 'New Tier List'
    }
});

const test = mongoose.model('TierList', TierListSchema);

module.exports = test;
