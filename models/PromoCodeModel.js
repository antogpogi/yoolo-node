const Sequelize = require('sequelize')
const sequelize = require('../util/database');

const PromoCode = sequelize.define('tbl_promocode', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    promocode: Sequelize.STRING,
    start_date: Sequelize.DATE,
    end_date: Sequelize.DATE,
    discount: Sequelize.DECIMAL,
    no_usage: Sequelize.INTEGER,
    no_per_usage: Sequelize.INTEGER,
    type: Sequelize.ENUM('percentage', 'flat', 'free'),
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = PromoCode