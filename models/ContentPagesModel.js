const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const ContentPagesModel = sequelize.define('tbl_content_pages', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true   
    },
    name: Sequelize.STRING,
    description: Sequelize.BLOB,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = ContentPagesModel