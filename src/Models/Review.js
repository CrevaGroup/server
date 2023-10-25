const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Review', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        description: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        assessment: {
            types: DataTypes.ENUM('1', '2', '3', '4', '5'),
            allowNull:false,
        }
    }, { paranoid: true })
}