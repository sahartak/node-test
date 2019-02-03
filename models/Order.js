const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = mongoose.model('orders', new Schema({
    date: {
        type: Date,
        default: Date.now
    },

    order: {
        type: Number,
        required: true
    },

    list: [
        {
            name: {
                type: String
            },
            cost: {
                type: Number
            },
            quantity: {
                type: Number
            }
        }
    ],

    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

}));