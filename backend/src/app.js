if(process.env.NODE_ENV !=="PRODUCTION"){
    require('dotenv').config({
        path: './src/config/.env'
    });
}
const express = require('express');
const connectDatabase = require('./DB/database.js');
const PORT = process.env.PORT;


const app = express();

app.get("/", (req, res)=>{
    return res.send("Welcome to backend");
});

app.listen(PORT, async () => {
    connectDatabase();
    console.log('The Server is running on Port:8080 URL : http://localhost:8080');
});