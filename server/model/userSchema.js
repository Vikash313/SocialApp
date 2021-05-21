const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    comment:String,
    likeCount: {
        type: Number,
        default:0
    },
    image:String
})

const User = mongoose.model('SOCIAL_DATA', userSchema);

module.exports = User;