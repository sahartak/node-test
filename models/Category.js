const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = mongoose.model('categories', new Schema({
    name: {
        type: String,
        required: true
    },

    imageSrc: {
        type: String,
        default: ''
    },

    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
    }
}));