const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Sticker = sequelize.define('tbl_sticker', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    caption: Sequelize.STRING,
    price: Sequelize.DECIMAL(12,2),
    sticker_image: Sequelize.STRING,
    height: Sequelize.INTEGER,
    width: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = Sticker