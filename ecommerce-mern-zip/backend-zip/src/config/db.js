const mongoose = require("mongoose");



const connectDb=()=>{
    return mongoose.connect(process.env.mongoDbUrl)
}

module.exports={connectDb}