const mongoose = require('mongoose');
const Interest = require('./Interest');

const { Schema } = mongoose;

const TierListSchema = new Schema({
    tierListName: {
        type: String,
        default: 'New Tier List'
    },
    S: [{
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }],

    A: [{
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }],

    B: [{
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }],
    
    C: [{
        type: Schema.Types.ObjectId,
        ref: 'Interest'
    }]
});

const test = mongoose.model('TierList', TierListSchema);

module.exports = test;
