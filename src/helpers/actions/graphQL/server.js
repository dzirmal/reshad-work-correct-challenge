// I should test different methods

const express = require('express')
const expressGraphQL = require('express-graphql')
const { GraphQLSchema, GraphQLType, GraphQLString } = require('graphql')
const app = express()
const schema = new GraphQLSchema({
  query: new GraphQLType({
    name: 'Hello World',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World',
      },
    }),
  }),
})

app.use(
  '/http://swapi.dev/api/people/5/',
  expressGraphQL({
    schema: schema,
    graphql: true,
  })
)

app.listen(3000, () => console.log('Server is Running...'))
