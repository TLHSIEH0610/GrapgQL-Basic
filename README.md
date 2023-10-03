# GrapgQL-Basic
This repository contains a basic GraphQL server built with Node.js. It provides a simple interface for running GraphQL queries.

## Usage
**Start the Server**: To launch the server, run the following command:
```
npm start
```

**Query Interface**: Once the server is running, you can access the GraphQL query interface at http://localhost:4000.

**Sample Query**: Here's an example of a GraphQL query you can use in the interface:
```
query ExampleQuery ($id: ID!) {
  game(id: $id) {
    title
    platform
    reviews {
      rating
      content
    }
  }
}
```
