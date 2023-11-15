const { User, Transaction, Review, Service } = require('../../db.js');

const getUserController = async (id) => {

    if (id) {
        const user = await User.findOne({
            where: { id },
            include: [
            {
                model: Transaction,
                as: "buys",
                include:[{
                    model: Service
                }]
            },
            {
                model: Review,
                as: "reviews"
            }]
        });
        if (!user) throw new Error('No se encontró el usuario.');
        if (!user.dataValues.age) return {
            ...user.dataValues,
            access: true,
            complete: false
        };
        return {
            ...user.dataValues,
            access: true,
            complete: true
        };
    }

    const users = await User.findAll({
        include: [{
            model: Review,
            as: "reviews"
        },
        {
            model: Transaction,
            as: "buys",
            include:[{
                model: Service
            }]
        }], paranoid: false
    })

    return users
}

module.exports = getUserController;