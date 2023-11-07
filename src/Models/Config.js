const { DataTypes } = require('sequelize');

module.exports = (sequelize)=>{
    sequelize.define('Config', {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4
        },
        filters: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
        dolarValue: {
            type: DataTypes.FLOAT,
            allowNull: false
        }
    }, {paranoid: true})
}