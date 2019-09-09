const Sequelize = require('sequelize');
const empty = require('is-empty');

const sequelize = require('../util/database');

const User = sequelize.define('tbl_user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    social_id: Sequelize.STRING,
    user_code: Sequelize.STRING,
    user_name: Sequelize.STRING,
    gender: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    country_code: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    profile_image: Sequelize.STRING,
    location: Sequelize.TEXT,
    latitude: Sequelize.STRING,
    longitude: Sequelize.STRING,
    role: Sequelize.ENUM('C', 'U'),
    account_type_id: Sequelize.INTEGER,
    login_type: Sequelize.ENUM('S', 'F', 'G'),
    device_type: Sequelize.STRING,
    device_token: Sequelize.STRING,
    forgotpwd_date: Sequelize.DATE,
    forgotpwd_token: Sequelize.STRING,
    is_active: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 1
    },
    is_celebrity: {
        type: Sequelize.TINYINT,
        allowNull: true,
        defaultValue: 0
    },
    celebrity_datetime: Sequelize.DATE,
    min_sticker_price: Sequelize.DECIMAL(12, 2),
    wallet: Sequelize.DOUBLE(10, 2),
    login: Sequelize.ENUM('login', 'logout'),
    last_login: Sequelize.DATE
})

const offsetHelper = ({page, count, ceiling}) => {
    const offset = page * count;
    return `LIMIT ${count} OFFSET ${offset}`;
}

User.getUserOffset = async ({search}, paging) => {
    let whereClause = ''
    whereClause += `WHERE userlevel = 3 
    ${!empty(search) ? `AND CONCAT(firstname, ' ',lastname) LIKE "%${search}%"` : ''}
    ${!empty(paging.ceiling) ? `AND Id <= ${paging.ceiling}` : ''}`

    const query = `SELECT * FROM tblusers ${whereClause} ${offsetHelper(paging)}`;

    const userRecords = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT
    })

    return {
        records: userRecords,
        offset:{
            page: 0,
            recordCount: 100,
            pageCount: 20,
            ceiling: 100
        }
    }
}

User.is_follow = async () => {

}

User.follower_count = async () => {

}

User.following_count = async () => {

}

User.following_detail = async () => {

}

User.follower_detail = async() => {

}

module.exports = User