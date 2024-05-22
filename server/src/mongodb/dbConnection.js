//const {mongoose} = require('mongoose');
const { MongoClient } = require('mongodb');

require('dotenv').config({path:'.env.local'});

const uri = process.env.MONGODB_URI;
console.log('uri',typeof uri);


let client;

const connectToDatabase=async()=>{
 if(client && client.topology.isConnected()){
  return client;
 }

try {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await client.connect();
 // console.log('client',client)
  console.log('Connected successfully to MongoDB Atlas');
  return client;
} catch (error){
  console.error('MongoDB connection error', error);
  throw error;
}

}
console.log('connectToDatabase', connectToDatabase)

module.exports = connectToDatabase;

// console.log('client',client)
// async function run(){
//   try {
//     //connect the client to the server
//     await client.connnect();
//     // send a ping to confirm a succesful connection
//     await client.db('admin').command({ping:1});

//     console.log('Pinged your deployment. You successfully connected to MongoDB!');
//   } finally {
//     await client.close()
//   }
// }

// run().catch(console.dir);



// const connectionDB= async()=>{
//   try{
//       await mongoose.connect(`${uri}`, {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         });
//         console.log('Connected to MongoDB Atlas');
//   }
//   catch(err){npm 
//   console.error('Error connecting to MongoDB', err.message);
//   console.error('Details:', err);
// };
// };
// console.log('connectionDB dbConnection.js',connectionDB)

// module.exports = connectionDB();
