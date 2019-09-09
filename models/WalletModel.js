const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Wallet = sequelize.define('tbl_user_follow', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    sticker_id: Sequelize.INTEGER,
    order_id: Sequelize.TEXT,
    amount: Sequelize.DOUBLE(8, 2),
    description: Sequelize.TEXT,
    transaction_id: Sequelize.TEXT,
    payment_status: Sequelize.STRING,
    status: Sequelize.ENUM('Credited', 'Debited')
})

module.exports = Wallet