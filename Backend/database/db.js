const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        }).connection
        console.log("Connected DataBase")
    } catch (err) {
         console.log(err)
    }
}

module.exports = connectDB