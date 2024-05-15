const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('../src/graphql/shema');
const resolvers = require('../src/resolvers/resolvers');
const  connectToDatabase  = require('../src/mongodb/dbConnection');

console.log('connectiontoDB',connectToDatabase)
//import library dotenv
require('dotenv').config({path:'.env.local'});

const startServer = async()=>{

    const app= express();

    //config Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });

    await server.start();
    server.applyMiddleware({app});

    //connection to MongoDB
    //await connectToDatabase();

    const PORT = process.env.PORT || 4000;
    //console.log(PORT)
    const DATABASE_NAME = process.env.DATABASE_NAME;
    const COLLECTION_NAME = process.env.COLLECTION_NAME;
    // console.log('db_name', DATABASE_NAME);
    // console.log('collection_name', COLLECTION_NAME);

    //connection to MongoDB
    app.get('/', async(req, res)=>{
        try {
            const client = await connectToDatabase();
            //console.log('client', client)
            const database = client.db(DATABASE_NAME);
            //console.log('database', database)
            const collection = database.collection(COLLECTION_NAME);
            //console.log('collection', collection)
            const data = await collection.find({}).toArray();
            //console.log('data', data)
            res.json(data);
        }catch(error){
            console.log(error, error.message);
            res.status(500).send('Error connecting to db', error.message);
        }
    });

    app.listen(PORT, ()=>{
        console.log(`Server listening on PORT: ${PORT}${server.graphqlPath}`)
})

}

startServer();

