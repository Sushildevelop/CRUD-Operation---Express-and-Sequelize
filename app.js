const express=require('express');
const { dbconnection } = require('./config/dbconnect');
const { router } = require('./routes/route');
const { userModel } = require('./model/userModel');

const app=express()

app.use(express.json())

app.use('/',router)

userModel.sync({force:false})


app.listen(5000,async()=>{

    console.log('Server is listen at port: localhost:3000 , ');
   await dbconnection();
    
})

