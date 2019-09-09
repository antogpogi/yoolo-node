const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Reported = sequelize.define('tbl_reported', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    reported_id: Sequelize.INTEGER,
    reason: Sequelize.BLOB,
    type: Sequelize.ENUM('user', 'post'),
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = Reported