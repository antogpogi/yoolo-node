const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UserPostSave = sequelize.define('tbl_user_follow', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = UserPostSave