const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const Item = mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model("item", Item);