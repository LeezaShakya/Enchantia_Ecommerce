const mongoose = require('mongoose');

const necklaceSchema = new mongoose.Schema({
    necname: {
        type: String,
        required: true,
    },
    necdescription: {
        type: String,
        required: true,
    },
    neccategory: {
        type: String,
        required: true,
    },
    necprice: {
        type: Number,
        required: true,
    },
    necdetaildescription: {
        type: String, 
        required: true,
    },
    necimagea: {
        type: String,
        required: true,
    },
    // necimageb: {
    //     type: String,
    //     required: true,
    // },
    // necimagec: {
    //     type: String,
    //     required: true,
    // },
    // necimaged: {
    //     type: String,
    //     required: true,
    // },
});

const Necklace = mongoose.model('Necklace', necklaceSchema);
module.exports = Necklace;