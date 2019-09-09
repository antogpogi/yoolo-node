const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const UserDevice = sequelize.define('tbl_user_device', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: Sequelize.INTEGER,
    token: Sequelize.TEXT,
    device_id: Sequelize.TEXT,
    device_type: {
        type: Sequelize.CHAR(1),
        comment: "'A' -> Android, 'I' -> iOS"
    },
    uuid: Sequelize.STRING,
    os_version: Sequelize.STRING,
    device_name: Sequelize.STRING,
    model_name: Sequelize.STRING,
    ip: Sequelize.STRING
})

module.exports = UserDevice