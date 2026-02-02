const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db.js');
const mongoose = require('mongoose');
const authRoute = require('./Routes/authRoute.js');

const app = express();
dotenv.config();

app.use(cors({
    origin: '*',
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type','Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Database Connection
connectDB();

//Routes
app.use('/api/auth',authRoute);
// app.use('/api/users',userRoute);
// app.use('/api/tasks',taskRoute);
// app.use('/api/reports',reportRoute);

//Static Files
app.use('/public', express.static(path.join(__dirname, 'uploads')));

app.get('/nirav',(req,res)=>{
   console.log("Nirav here");
    res.send("Hello from Nirav");
})

app.listen(5000, (req,res)=>{
    console.log("Server is running on port 5000");
})