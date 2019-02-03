const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = mongoose.model('users', new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

}));