const { makeExecutableSchema } = require('graphql-tools');
const resolvers = require('./resolver');
const userSchema = require('./schemas/user');
const common = require('./schemas/common/common');
const enums = require('./schemas/common/enums');
const scalar = require('./schemas/common/scalar');
const _rootSchema = require('./schemas/_rootSchema');

const typeDefs = [
    common,
    enums,
    scalar,
    userSchema.userTypeDefs,
    _rootSchema
];

module.exports = makeExecutableSchema({typeDefs, resolvers})