const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Service', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {    // define currency (usd / ars)
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'https://cdn-icons-png.flaticon.com/512/3736/3736489.png'
        }
    }, { paranoid: true })
}