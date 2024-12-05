if(process.env.NODE_ENV !=='PRODUCTION'){
    require('dotenv').config({
        path:'./src/config/.env',
    })
}
const express= require('express');
const app=express();
const userRouter=require('./routes/user.route')
const connectDataBase=require('./DB/database.js')

app.get('/',(req,res)=>{
    return res.send({ message: 'Good Afternoon'})
});

module.exports=app;