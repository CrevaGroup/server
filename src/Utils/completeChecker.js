const completeChecker = (user) => {
    if (!user.dataValues.age) return {
        ...user.dataValues,
        access: true,
        complete: false
    }
    return {
        ...user.dataValues,
        access: true,
        complete: true
    }
}

module.exports = completeChecker