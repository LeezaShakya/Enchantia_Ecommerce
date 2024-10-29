const mongoose = require('mongoose');

const braceletSchema = new mongoose.Schema({
    bracname: {
        type: String,
        required: true,
    },
    bracdescription: {
        type: String,
        required: true,
    },
    braccategory: {
        type: String,
        required: true,
    },
    bracprice: {
        type: Number,
        required: true,
    },
    bracimagea: {
        type: String,
        required: true,
    },
    // bracimageb: {
    //     type: String,
    //     required: true,
    // },
    // bracimagec: {
    //     type: String,
    //     required: true,
    // },
    // bracimaged: {
    //     type: String,
    //     required: true,
    // },
});

const Bracelet = mongoose.model('Bracelet', braceletSchema);
module.exports = Bracelet;