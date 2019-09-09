const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const ContactUs = sequelize.define('tbl_contact_us', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    username: Sequelize.BLOB,
    email: Sequelize.STRING,
    description: Sequelize.BLOB,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = ContactUs