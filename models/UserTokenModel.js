const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UserToken = sequelize.define('tbl_user_follow', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    token: Sequelize.STRING,
    user_id: Sequelize.INTEGER
})

module.exports = UserToken