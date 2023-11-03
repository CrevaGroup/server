const mercadopago = require('mercadopago');

const mpLinkGenController = async (cart) => {

    mercadopago.configure({
        //la idea es esto hacerlo con una variable de entorno pero por el momento dejame el de prueba
        access_token: 'TEST-5596476252996116-110210-d508485fa045a5c70380e4bf904510d6-1533744930' 
    });

    const URL = "" //aca va la URL del back deployado

    let preference = {
        items: cart.items.map(item => ({
            id: item.id,
            title: item.title,
            currency_id: 'ARS',
            picture_url: item.photo,
            description: item.description,
            category_id: 'art',
            quantity: 1,
            unit_price: item.price
        })),
        payer: {
            address: {
                zip_code: cart.userId
              }
        },
        auto_return: 'approved',
        back_urls: {
            success: `http://localhost:5173/success`, //aca va la URL de la view que hizo valen para el success
            failure: ``  //aca va la URL de la view que hizo valen para el failure
        },
        notification_url: `${URL}/transaction/notify`,
        binary_mode: true,
    }
    try {
        const { response } = await mercadopago.preferences.create(preference)
        return response.init_point
    } catch (error) {
        return error.message
    }



}

module.exports = mpLinkGenController;