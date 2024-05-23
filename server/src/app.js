const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('../src/graphql/shema');
const resolvers = require('../src/resolvers/resolvers');
const  connectToDatabase  = require('../src/mongodb/dbConnection');
//import middleware cors to enable  on the express server
// const cors = require('cors');

console.log('connectiontoDB',connectToDatabase)
//import library dotenv
require('dotenv').config({path:'.env.local'});


const startServer = async()=>{

    const app= express();

    //config Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        // context: ({req}) =>{
        //     return {req};
        // },
    });

    await server.start();


     
    //Apollo Server middleware is applied to the /graphql path.
    // disables apollo-specific CORS, as i already handle it with express
    //server.applyMiddleware({app, path: 'graphql', cors: false});
    server.applyMiddleware({app})


    //url where the client(frontend) is running
    // const clientUrl= process.env.CLIENT_URL;
    // console.log('clientUrl',clientUrl)

   

    //connection to MongoDB
    //await connectToDatabase();

    const PORT = process.env.PORT || 4000;
    //console.log(PORT)
    const DATABASE_NAME = process.env.DATABASE_NAME;
    const COLLECTION_NAME = process.env.COLLECTION_NAME;
    // console.log('db_name', DATABASE_NAME);
    // console.log('collection_name', COLLECTION_NAME);

    //connection to MongoDB
    //// Endpoint to obtain data from MongoDB
    app.get('/', async(req, res)=>{
        try {
            const client = await connectToDatabase();
            console.log('client', client)
            const database = client.db(DATABASE_NAME);
            console.log('database', database)
            const collection = database.collection(COLLECTION_NAME);
            console.log('collection', collection)
            const data = await collection.find({}).toArray();
            console.log('data', data)
            res.json(data);
        }catch(error){
            console.log(error, error.message);
            res.status(500).json({ error: 'Error connecting to MongoDB'});
        }
    });

     //This code block tells to express server to accept cross-origin requests (CORS) only from the specified URL client
    //cors config.:
    // app.use(cors({
    //     origin: clientUrl,
    //     credentials: true
    // }));


    app.listen(PORT, ()=>{
        console.log(`Server listening on PORT: http://localhost:${PORT}/${server.graphqlPath}`)
})

}

startServer();

