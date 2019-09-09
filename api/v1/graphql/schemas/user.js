
exports.userTypeDefs = `
type User {
    Id: Int
    firstname: String
    lastname: String
    email_address: String
    mobile: String
    department_id: Int
    companyId: Int
    transportType: Int
    transport_desc: String
    license_plate: String
    username: String
    password: String
    userlevel: Int
    enabled: Int
    token: String
    created_at: DateTime
    updated_at: DateTime
}

type UserOffsetData {
    records: [User]
    offset: Offset
}

type UserLogin {
    social_id: String
    user_name: String
    gender: String
    email: String
    country_code: String
    phone_number: String
    profile_image: String
    location: String
    latitude: String
    longitude: String
    role: String
    account_type_id: String
    login_type: String
    device_type: String
    device_token: String
    forgotpwd_date: DateTime
    is_active: Int
    is_celebrity: Int
    celebrity_datetime: DateTime
    min_sticker_price: Float
    wallet: Float
    login: String
    last_login: DateTime
    insertdate: DateTime
    updatetime: DateTime
    user_id: Int
    profile_image_thumb: String
    is_follow: String
    total_followers: Int
    total_following: Int
    followers: [Follow]
    following: [Follow]
    remain_followers: Int
    remain_following: Int
    token: String
}

type Follow {
    user_id: Int
    user_name: String
    profile_image: String
    is_celebrity: Int
}

input UserFilter {
    search: String
}

input UserLoginData {
    email: String
    device_type: String
    device_token: String
    login_type: String
    password: String
}
`

exports.userQuery = `
    getUserOffset(filters: UserFilter, paging: offsetData): UserOffsetData

    getUserLogin(data: UserLoginData) : UserLogin
`