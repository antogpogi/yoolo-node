const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Post = sequelize.define('tbl_post', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    reference_post_id: Sequelize.INTEGER,
    caption: Sequelize.BLOB,
    location: Sequelize.TEXT,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    height: Sequelize.STRING,
    width: Sequelize.STRING,
    media_name: Sequelize.STRING,
    media_thumb: Sequelize.STRING,
    media_type: Sequelize.ENUM('P', 'V'),
    post_media_name: Sequelize.STRING,
    facebook_post_token: Sequelize.TEXT,
    twitter_post_token: Sequelize.TEXT,
    like_count: Sequelize.INTEGER,
    comment_count: Sequelize.INTEGER,
    share_count: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = Post