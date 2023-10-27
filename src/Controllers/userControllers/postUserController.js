const { User } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const postUserController = async (userInfo) => {
    userInfo = {
        ...userInfo,
        fullName: titleCase(userInfo.fullName)
    }

    const [user, created] = await User.findOrCreate({ where: { id: userInfo.id }, defaults: { ...userInfo } })
    if (!created) throw new Error ('El email ya se encuentra registrado.')
    return user;
}

module.exports = postUserController;