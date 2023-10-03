// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

// ex: The "Game" type defines the queryable fields for every game in data source.

//  The "Query" type is special: it lists all of the available queries that
//  clients can execute, along with the return type for each.
//  Ex: The "games" query returns an array of zero or more games.

export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
    author: Author!
    game: Game!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]    
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }
`;
