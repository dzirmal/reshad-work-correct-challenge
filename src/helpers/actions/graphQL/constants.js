// import { GraphQLServer } from 'graphql-yoga'
// const fetch = require('axios')

// const GET_MOVIES_QUERY = `
// type Query {
//   getMovie(id: Int!): Movie
// }

// type Planet {
//    name :  String
//      rotation_period :  String
//      orbital_period :  String
//      diameter :  String
//      climate :  String
//      surface_water :  String
//      population :  String
// }

// type Movie {
//     title: String
//     episode_id: Int
//     planets: [Planets]
// }

// `

// const resolvers = {
//   Movie: {
//     planets: (parent) => {
//       const promises = parent.allPlanets.planets.map(async (url) => {
//         const response = await fetch(url)
//         return response.json()
//       })
//       return Promise.all(promises)
//     },
//   },
//   Query: {
//     getMovie: async (_, { id }) => {
//       const response = await fetch(`http://swapi.dev/api/films/${id}/`)
//       console.log('response:', response)

//       return response.json()
//     },
//   },
// }

// const server = new GraphQLServer({ GET_MOVIES_QUERY, resolvers })
// server.start(() => console.log('server is running on localhost: 3001'))
