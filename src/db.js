require("dotenv").config();
const { Sequelize } = require("sequelize");
const { pg } = require('pg');
const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_HOST, POSTGRES_DATABASE, POSTGRES_URL, POSTGRES_URL_NON_POOLING } = process.env;

//Models
const userModel = require('./Models/User.js')
const typeModel = require('./Models/Type.js')
const reviewModel = require('./Models/Review.js')
const serviceModel = require('./Models/Service.js')
const transactionModel = require('./Models/Transaction.js')

const sequelize = new Sequelize(
    `${POSTGRES_URL}?sslmode=require`,  
    
    { logging: false, native: false, dialect: "postgres", dialectModule: pg });

//`postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}/${POSTGRES_DATABASE}?sslmode=require`,

userModel(sequelize);
typeModel(sequelize);
reviewModel(sequelize);
serviceModel(sequelize);
transactionModel(sequelize);

const {
    User,
    Type,
    Review,
    Service,
    Transaction
} = sequelize.models;

//! define associations
User.hasMany(Review, {as: "reviews", foreignKey: "userId"});
Review.belongsTo(User, {as: "user"});
User.hasMany(Transaction, {as: "buys", foreignKey: "userId"});
Transaction.belongsTo(User, {as: "user"});
Service.hasMany(Review, {as: "reviews", foreignKey: "serviceId"});
Review.belongsTo(Service, {as: "service"});
Service.belongsToMany(Transaction, { through: 'Services_Transactionsssss' });
Transaction.belongsToMany(Service, { through: 'Services_Transactionsssss' });
Service.belongsToMany(Type, { through: 'Services_Types' });
Type.belongsToMany(Service, { through: 'Services_Types' });

module.exports = {
    ...sequelize.models,
    conn: sequelize
}
