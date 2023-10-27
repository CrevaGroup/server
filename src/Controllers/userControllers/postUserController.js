const { User } = require('../../db');
const titleCase = require('../../Utils/titleCase');

const postUserController = async (userInfo) => {
    userInfo = {
        ...userInfo,
        fullName: titleCase(userInfo.fullName)
    };

    const [user, created] = await User.findOrCreate({ where: { id: userInfo.id }, defaults: { ...userInfo } });

    if (!created) throw new Error ('El email ya se encuentra registrado.');
    if (!user.age) return {
        ...user,
        access: true,
        complete: false
    }
    return {
        ...user,
        access: true,
        complete: true
    };
}

module.exports = postUserController;