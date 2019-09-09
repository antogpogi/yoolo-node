const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,        //database
    process.env.DB_USERNAME,    //username
    process.env.DB_PASSWORD,    //password
    {
        dialect: process.env.DB_DIALECT,
        host: process.env.HOST,
        port: process.env.DB_PORT,
        operatorsAliases: Sequelize.Op,
        logging: false // disable console logging of queries
        // timezone: '+08:00',
        // dialectOptions: {
        //     useUTC: false, // for reading from database
        // },
    }
);

module.exports = sequelize;