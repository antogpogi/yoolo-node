const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UserRedeem = sequelize.define('tbl_user_follow', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    sticker_buy_id: Sequelize.BLOB,
    redeem_points: Sequelize.DECIMAL(12, 2),
    redeem_date: Sequelize.DATE,
    status: Sequelize.ENUM('pending', 'complete'),
    transaction_id: Sequelize.TEXT,
    transaction_date: Sequelize.DATE,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = UserRedeem