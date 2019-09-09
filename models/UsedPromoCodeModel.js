const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UsedPromoCode = sequelize.define('tbl_used_promocode', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    promocode_id: Sequelize.INTEGER,
    discount: Sequelize.DECIMAL(12,2),
    promocode_type: Sequelize.STRING,
    used_id: Sequelize.INTEGER,
    used_type: Sequelize.STRING,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = UsedPromoCode