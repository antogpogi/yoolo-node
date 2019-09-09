const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const HashTag = sequelize.define('tbl_hash_tag', { 
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    hash_tag: Sequelize.BLOB,
    count: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = HashTag