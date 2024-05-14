const express = require('express');
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('../src/graphql/shema');
const resolvers = require('../src/resolvers/resolvers');
const {connectionDB} = require('../src/mongodb/dbConnection')

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
    await connectionDB;

    const PORT = process.env.PORT || 4000;
    console.log(PORT)



    app.listen(PORT, ()=>{
        console.log(`Server listening on PORT: ${PORT}${server.graphqlPath}`)
})

}

startServer();

