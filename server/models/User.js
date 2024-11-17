const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
    },
    lname:{
        type:String,
        required:true,
        trim:true,
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    company: {
        type: String,
        required: true,
    },
    jobtitle: {
        type: String,
        required:true,
    },
});
module.exports = mongoose.model("user", userSchema);
