const mongoose = require("mongoose");


const userloginSchema = new mongoose.Schema({
    googleId:String,
    displayName:String,
    email:String,
    Image:String
},{
    timestamps:true
})

const usredb = new mongoose.model("loginuser", userloginSchema)

module.exports = usredb;