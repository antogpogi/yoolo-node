const User = require('../../../../models/UserModel');
const { UserInputError} = require('apollo-server-express')
const crypto = require('crypto'), alogrithm = 'aes-256-ecb', password = process.env.ENCRYPT_KEY;

require('dotenv').config();

module.exports = {
    Query: {
        getUserOffset: async (_, {
            filters, paging
        }) => {
            return await User.getUserOffset(filters, paging);
        },
        getUserLogin: async (_, {
            data
        }) => {
            let res;
            data.email ? res = null : res = new UserInputError('Email cannot be blank.');
            data.password ? res = null : res = new UserInputError('Password cannot be blank.');
            
            const cipher = crypto.createCipheriv(alogrithm, password, "");
            let cryptedPassword = cipher.update(data.password, 'Unicode','base64');
            cryptedPassword += cipher.final('base64');
            res = await User.findOne({
                where:{
                    user_name: data.email
                }
            })
            
            return {
                ...res,
                profile_image: process.env.S3_URL + res.profile_image,
                profile_image_thumb: process.env.S3_URL + res.profile_image
            };
        }
    }
}