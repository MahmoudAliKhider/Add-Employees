const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/Employee",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).connection
        console.log("Connected DataBase")
    } catch (err) {
         console.log(err)
    }
}

module.exports = connectDB