const express = require('express');
const { ApolloServer} = require('apollo-server-express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dns = require('dns');
const os = require('os');
const schema = require('./api/v1/graphql/schema');
const sequelize = require('./util/database');
const { createServer } = require('http');

const adminDetailsModel = require('./models/AdminDetailsModel');
const blockuser = require('./models/BlockUserModel');
const contactUs = require('./models/ContactUsModel');
const ContentPages = require('./models/ContentPagesModel');
const hashTag = require('./models/HashTagModel');
const notification = require('./models/NotificationsModel');
const postComment = require('./models/PostCommentModel');
const postLike = require('./models/PostLikeModel');
const post = require('./models/PostModel');
const postTag = require('./models/PostTagModel');
const promoCode = require('./models/PromoCodeModel');
const reported = require('./models/ReportedModel');
const sticker = require('./models/StickerModel');
const stickerTransaction = require('./models/StickerTransactionModel');
const usedPromocode = require('./models/UsedPromoCodeModel');
const userDevice = require('./models/UserDeviceModel');
const userFollow = require('./models/UserFollowModel');
const user = require('./models/UserModel');
const userPostSave = require('./models/UserPostSaveModel');
const userRedeem = require('./models/UserRedeemModel');
const userToken = require('./models/UserTokenModel');
const wallet = require('./models/WalletModel');


require('dotenv').config();

const app = express();

dns.lookup(os.hostname(), (err, add, fam) => {
    console.log("Server started... Listening to " + add + ":"+ process.env.PORT);
})

app.use('/graphql', bodyParser.json());

app.use(cors());

// Set HTML Templating Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

const apolloServer = new ApolloServer({schema});

apolloServer.applyMiddleware({app, path:'/api/v1/graphql'});

const httpServer = createServer(app);

sequelize
    .sync({
        force: false
    })
    .then(result => {
        httpServer.listen(process.env.PORT, () => { });
        console.log(`Server running at port ${process.env.PORT}`)
    })
    .catch(err => {
        console.log(err);
    });
