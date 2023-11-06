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
            validate: {
                len: [4]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        age: {
            type: DataTypes.TEXT,
        },
        photo: {
            type: DataTypes.STRING,
            defaultValue: 'https://res.cloudinary.com/dk4amlgtk/image/upload/v1698592965/tnrmteyspw3g0gd4ijrh.png'
        },
        curriculum: {
            type: DataTypes.STRING,
            allowNull: true
        }, 
        nacionalidad: {
            type: DataTypes.STRING
        }
    }, {paranoid: true})
}