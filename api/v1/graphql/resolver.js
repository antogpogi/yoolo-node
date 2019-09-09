const userResolver = require('./resolvers/user');
const { GraphQLScalarType } = require('graphql');

module.exports = {
    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'Date custom scalar type',
        parseValue(value) {
            return new Date(value); // value from the client
        },
        serialize(value) {
            return value.toISOString(); // value sent to the client
        },
        parseLiteral(ast) {
            console.log(ast.kind)
            if (ast.kind === "StringValue") {
                return new Date(ast.value) // ast value is always in string format
            }
            throw new UserInputError("Invalid Date format.");
        },
    }),
    Query:{
        ...userResolver.Query
    }
}