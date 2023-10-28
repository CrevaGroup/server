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
            defaultValue: 'https://res.cloudinary.com/dk4amlgtk/image/upload/v1698452423/wl2rucr4t8h4pyq8b6w0.png'
        }
    }, { paranoid: true })
}