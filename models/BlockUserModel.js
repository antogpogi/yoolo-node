const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const BlockUser = sequelize.define('tbl_block_user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    block_by_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = BlockUser