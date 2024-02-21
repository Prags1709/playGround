const bodyParser = require('body-parser');
const cors = require('cors');
const {ApolloServer} = require('apollo-server-express')
const {makeExecutableSchema} = require("@graphql-tools/schema");
const {graphqlExpress, graphiqlExpress, graphqlHTTP} = require('express-graphql')
const express = require('express');
const fs = require('fs')

const app = express();

const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({typeDefs, resolvers})

const server = new ApolloServer({
   schema
})

app.use('/graphql', express.json(), graphqlHTTP({ schema }));
app.use('/graphiql', graphqlHTTP({ endpointURL: '/graphql' }));

//server.applyMiddleware({app})

const port = process.env.PORT || 9000;
app.listen(
   port, () => console.info(
      `Server started on port ${port}`
   )
);