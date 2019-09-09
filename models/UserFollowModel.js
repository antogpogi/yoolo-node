const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UserFollow = sequelize.define('tbl_user_follow', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    friend_id: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = UserFollow