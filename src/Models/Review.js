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
            type: DataTypes.INTEGER,
            validate: {
                min: 0,
                max: 5
            },
            allowNull:false,
        }
    }, { paranoid: true })
}