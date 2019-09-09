const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const PostTag = sequelize.define('tbl_post_tag', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    post_id: Sequelize.INTEGER,
    user_id: Sequelize.INTEGER,
    x_axis: Sequelize.STRING,
    y_axis: Sequelize.STRING,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = PostTag