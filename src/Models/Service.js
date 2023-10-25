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
        }
    }, { paranoid: true })
}