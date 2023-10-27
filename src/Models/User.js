const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('User', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.INTEGER,
        }
    }, {paranoid: true})
}