const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const StickerTransaction = sequelize.define('tbl_sticker_transaction', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sender_id: Sequelize.INTEGER,
    receiver_id: Sequelize.INTEGER,
    sticker_id: Sequelize.INTEGER,
    transaction_id: Sequelize.TEXT,
    payment_status: {
        type: Sequelize.TINYINT,
        comment: "'0' -> Unpaid, '1' -> Paid, '2' -> Pending"
    },
    payref: Sequelize.TEXT,
    promocode_id: Sequelize.INTEGER,
    discount_amount: Sequelize.DECIMAL(12,2),
    sticker_amount: Sequelize.DECIMAL(12,2),
    paid_amount: Sequelize.DECIMAL(12, 2),
    has_sent: {
        type: Sequelize.TINYINT,
        comment: "'0' -> Unsent, '1' -> Sent"
    },
    redeemn_amount: Sequelize.DECIMAL(12,2),
    has_redeem: Sequelize.ENUM('pending', 'requested', 'complete'),
    sent_datetime: Sequelize.DATE,
    response_datetime: Sequelize.DATE,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = StickerTransaction