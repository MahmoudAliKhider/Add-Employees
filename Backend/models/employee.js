const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    name:{type:String},
    position:{type:String},
    dept:{type:String}
},
{timeseries:true}
)

module.exports = mongoose.model("Employee",employeeSchema)
