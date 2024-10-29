const mongoose = require('mongoose');

const ringSchema = new mongoose.Schema({
    ringname: {
        type: String,
        required: true,
    },
    ringdescription: {
        type: String,
        required: true,
    },
    ringcategory: {
        type: String,
        required: true,
    },
    ringprice: {
        type: Number,
        required: true,
    },
    ringdetaildescription: {
        type: String,
        required: true,
    },
    ringimagea: {
        type: String,
        required: true,
    },
    // ringimageb: {
    //     type: String,
    //     required: true,
    // },
    // ringimagec: {
    //     type: String,
    //     required: true,
    // },
    // ringimaged: {
    //     type: String,
    //     required: true,
    // },
});

const Ring = mongoose.model('Ring', ringSchema);
module.exports = Ring;