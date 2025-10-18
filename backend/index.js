const express=require('express');
const ConnectToMongo = require('./connect');
const app=express();
const Route=require("../backend/Routes/User");

const cors = require('cors');
const cors = require("cors");
app.use(cors({
  origin: "https://myporfoliofrontend.onrender.com", 
  methods: ["GET", "POST"],
  credentials: true
}));
// Middleware to parse JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// port=3000;
ConnectToMongo();

app.use('/api/user',Route);



app.get("/",(req,res)=>{
    res.send("server is running");
})

app.listen(3000);
