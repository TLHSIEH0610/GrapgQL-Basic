import db from "./_db.js";
// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves games from the "games" array.
export const resolvers = {
    Query: {
        games() {
            return db.games;
        },
        authors() {
            return db.authors;
        },
        reviews() {
            return db.reviews;
        },
    },
};
