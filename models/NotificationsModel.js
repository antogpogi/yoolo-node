const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Notification = sequelize.define('tbl_notifications', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    sender_id: Sequelize.INTEGER,
    receiver_id: Sequelize.INTEGER,
    tag_type: Sequelize.ENUM('following', 'like', 'comment', 'other_comment', 'caption_tag', 'comment_tag', 'post_tag', 'redeem'),
    notification_id: Sequelize.INTEGER,
    notification_type: Sequelize.ENUM('post', 'follow', 'like', 'comment', 'redeem'),
    message: Sequelize.TEXT,
    is_read: Sequelize.ENUM('unread', 'read'),
    notification_read: Sequelize.ENUM('unread', 'read')
})

module.exports = Notification