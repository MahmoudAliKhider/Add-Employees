const express = require('express');
const body_Parser =require("body-parser")
 const dotenv = require("dotenv").config()
const port = process.env.PORT
const Database = require('./database/db')
const emploueeRouter =  require('./router/employees')
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(body_Parser.json())
app.use(cors({origin:"http://localhost4200"}))
Database()

app.use('/employees', emploueeRouter)
app.listen((port),()=>{
    console.log(`server connected to http://localhost${port}`)
})