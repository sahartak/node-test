const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = mongoose.model('positions', new Schema({
    name: {
        type: String,
        required: true
    },

    cost: {
        type: Number,
        required: true
    },

    category: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    },

    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }

}));