const mongoose = require("mongoose")

const mongoDbUrl='mongodb+srv://poonamdigole123:jyoannsEcommerce@cluster0.ozsh9ah.mongodb.net/?retryWrites=true&w=majority'
const connectDb=()=>{
    return mongoose.connect(mongoDbUrl)
}

module.exports={connectDb}