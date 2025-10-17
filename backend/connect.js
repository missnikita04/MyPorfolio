const mongoose=require('mongoose');

const mongoURI='mongodb://127.0.0.1:27017/contactform';
const ConnectToMongo=async()=>{
    try{
       await mongoose.connect(mongoURI, {
    });
    console.log("connected to mongodb")
    }catch(err){
        console.log("not conected");
        process.exit(1);
    }
}
module.exports=ConnectToMongo;