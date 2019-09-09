const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const PostLike = sequelize.define('tbl_post_like', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = PostLike