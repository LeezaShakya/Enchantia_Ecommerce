const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    detaildescription: {
        type: String,
        required: true,
    },
    imagea: {
        type: String,
        required: true,
    },
    
    // imageb: {
    //     type: String,
    //     required: true,
    // },
    // imagec: {
    //     type: String,
    //     required: true,
    // },
})
module.exports = mongoose.model("Product", productSchema);