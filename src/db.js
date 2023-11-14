require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//Models
const userModel = require('./Models/User')
const typeModel = require('./Models/Type')
const reviewModel = require('./Models/Review')
const serviceModel = require('./Models/Service')
const transactionModel = require('./Models/Transaction')
const igPostModel = require('./Models/IGpost.js')
const configModel = require('./Models/Config.js')
const textBlogModel = require('./Models/TextBlog.js')
const keywordModel = require('./Models/Keyword.js')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false });

userModel(sequelize);
typeModel(sequelize);
reviewModel(sequelize);
serviceModel(sequelize);
transactionModel(sequelize);
igPostModel(sequelize);
configModel(sequelize);
textBlogModel(sequelize);
keywordModel(sequelize);

const {
    User,
    Type,
    Review,
    Service,
    Keyword,
    Transaction
} = sequelize.models;

//! define associations
User.hasMany(Review, {as: "reviews", foreignKey: "userId"});
Review.belongsTo(User, {as: "user"});
User.hasMany(Transaction, {as: "buys", foreignKey: "userId"});
Transaction.belongsTo(User, {as: "user"});
Service.hasMany(Review, {as: "reviews", foreignKey: "serviceId"});
Review.belongsTo(Service, {as: "service"});
Service.belongsToMany(Transaction, { through: 'Services_Transactions' });
Transaction.belongsToMany(Service, { through: 'Services_Transactions' });
Service.belongsToMany(Type, { through: 'Services_Types' });
Type.belongsToMany(Service, { through: 'Services_Types' });
Keyword.belongsToMany(Type, { through: 'Types_Keywords'});
Type.belongsToMany(Keyword, { through: 'Types_Keywords'});

module.exports = {
    ...sequelize.models,
    conn: sequelize
}
