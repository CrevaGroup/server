require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

//Models
const userModel = require('./Models/User')
const reviewModel = require('./Models/Review')
const serviceModel = require('./Models/Service')
const transactionModel = require('./Models/Transaction')

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    { logging: false, native: false });

userModel(sequelize);
reviewModel(sequelize);
serviceModel(sequelize);
transactionModel(sequelize);

const {
    User,
    Review,
    Service,
    Transaction
} = sequelize.models;

//! define associations
User.hasMany(Review);
Review.belongsTo(User);
User.hasMany(Transaction);
Transaction.belongsTo(User);
Service.hasMany(Review);
Review.belongsTo(Service);
Service.belongsToMany(Transaction, { through: 'Services_Transactions' });
Transaction.belongsToMany(Service, { through: 'Services_Transactions' });

module.exports = {
    ...sequelize.models,
    conn: sequelize
}