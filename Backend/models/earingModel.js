const mongoose = require('mongoose');

const earingSchema = new mongoose.Schema({
    earname: {
        type: String,
        required: true,
    },
    eardescription: {
        type: String,
        required: true,
    },
    earcategory: {
        type: String,
        required: true,
    },
    earprice: {
        type: Number,
        required: true,
    },
    eardetaildescription: {
        type: String,
        required: true,
    },
    earimagea: {
        type: String,
        required: true,
    },
    // earimageb: {
    //     type: String,
    //     required: true,
    // },
    // earimagec: {
    //     type: String,
    //     required: true,
    // },
    // earimaged: {
    //     type: String,
    //     required: true,
    // },
});

const Earing = mongoose.model('Earing', earingSchema);
module.exports = Earing;