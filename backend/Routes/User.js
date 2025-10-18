const express=require('express'
);
const router=express.Router();
// create Route
const User=require('../Models/User');
const path=require('path');

router.post("/Submit",async(req,res)=>{
    console.log("Incoming data:", req.body); // Debug

   try{
     const {name,email,message}=req.body;
  const data= await User.create({
        name,email,message
    });
     // Send response back
    res.status(201).json({
      success: true,
      message: 'Data saved successfully!',
      data: data
    });


   }
    catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Could not save data.',
      error: error.message
    });
}
})
module.exports=router;