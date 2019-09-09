const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const AdminDetails = sequelize.define('tbl_admin_details', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    profile_image: Sequelize.STRING,
    role: Sequelize.ENUM('S', 'A'),
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    }
})

module.exports = AdminDetails