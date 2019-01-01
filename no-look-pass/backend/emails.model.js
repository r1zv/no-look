const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Email = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String
    },
    created_on: {
        type: String
    },
    consent: {
        type:Boolean
    }
});

module.exports = mongoose.model('Email', Email);