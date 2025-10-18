
// require('dotenv').config();
// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('✅ Connected to MongoDB Atlas'))
//   .catch((err) => console.error('❌ MongoDB connection error:', err));

// const mongoose=require('mongoose');

// // const mongoURI='https://myporfolio-amzm.onrender.com';
// const ConnectToMongo=async()=>{
//     try{
//        await mongoose.connect(mongoURI, {
//     });
//     console.log("connected to mongodb atlas")
//     }catch(err){
//         console.log("not conected");
//         process.exit(1);
//     }
// }
// module.exports=ConnectToMongo;




require('dotenv').config();
const mongoose = require('mongoose');

const ConnectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

module.exports = ConnectToMongo;
