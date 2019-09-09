const userSchema = require('./user');

module.exports = `

type Query {
    ${userSchema.userQuery}
}
`