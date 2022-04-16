const fs = require("fs");
const path = require("path");
const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers')
const TrackAPI = require('./datasources/track-api')

const schema = fs.readFileSync(path.join(__dirname, './schema.graphql'), {
  encoding: 'utf8'
})

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  dataSources() {
    return {
      trackAPI: new TrackAPI()
    }
  }
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
`);
});
