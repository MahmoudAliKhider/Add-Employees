const express = require('express');
const body_Parser =require("body-parser")
 const dotenv = require("dotenv").config()
const cors = require("cors")
const app = express();
app.use(express.json())
const Database = require('./database/db')
app.use(body_Parser.json())
app.use(cors({origin:"http://localhost4200"}))
Database()
const port = process.env.PORT

app.listen((port),()=>{
    console.log(`server connected to http://localhost${port}`)
})