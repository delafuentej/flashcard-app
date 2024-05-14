const {mongoose} = require('mongoose');
require('dotenv').config({path:'.env.local'});

const uri = process.env.MONGODB_URI;
console.log(uri);

const connectionDB= async()=>{
    try{
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          console.log('Connected to MongoDB Atlas');
    }
    catch(err){
    console.error('Error connecting to MongoDB', err.message);
    console.error('Details:', err);
  };
};

module.exports = connectionDB;