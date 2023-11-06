const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Keyword', {
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
    })
}