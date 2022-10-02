const express = require('express');
const app = express();
const Database = require('./database/db')
Database()
const port = 3000;
app.listen((port),()=>{
    console.log(`server connected to http://localhost${port}`)
})