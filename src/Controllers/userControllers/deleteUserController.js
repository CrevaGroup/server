const { User, Review } = require('../../db.js');
const emailBuilder = require('../../Utils/emailBuilder.js');

const deleteUserController = async (id) => {

    const userFind =  await User.findByPk(id, {
        include: [
            {
                model: Review,
                as: "reviews"
            }]
    });
    
    if(userFind !== null){
    transporter.sendMail(emailBuilder(userFind.email, 'Tu cuenta ha sido desactivada temporalmente', `${userFind.fullName}, queremos avisarte que por motivos de la empresa, tu cuenta ha sido desactivada temporalmente`));
    for(const review of userFind.reviews){
        await Review.destroy({where: {id: review.id}})
    }
    await User.destroy({ where: { id }});
    const deletedUser = await User.findOne({where: {id}, paranoid: false})
    return deletedUser;
    }
    else{
        const userRestored = await User.restore({where:{id}});
        await Review.restore({where: {userId: id}});
         if(userRestored !== 1) throw new Error("Usuario no encontrado");
         const restoredUser = await User.findOne({where: {id}})
         transporter.sendMail(emailBuilder(restoredUser.email, 'Tu cuenta ha sido restaurada', `${restoredUser.fullName}, queremos avisarte que tu cuenta ha sido restaurada`)); 
         return restoredUser;
    }


}




module.exports = deleteUserController;