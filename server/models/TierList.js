const { Schema, model } = require('mongoose');

const tierListSchema = new Schema(
    {
        sTier: [
            {
                rank: String,
                interests: [{
                    id: Number,
                    content: String,
                    image: String
                }]
            }
        ],
        aTier: {
            type: String,
            required: true,

        },
        bTier: {
            type: String,
            required: true,
            unique: true,
        },
        cTier: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        dTier: {
            type: String,
            required: true,
        },
        tierlist: [
            {
                rank: String,
                interests: [{
                    id: Number,
                    content: String,
                }]
            }
        ]
    },
    // set this to use virtual below
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const TierList = model('TierList', tierListSchema);

module.exports = User;
