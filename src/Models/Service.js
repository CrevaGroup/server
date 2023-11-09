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
        items: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        modalidad: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        download: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: 'https://res.cloudinary.com/dk4amlgtk/image/upload/v1698452423/wl2rucr4t8h4pyq8b6w0.png'
        }
    }, { paranoid: true })
}