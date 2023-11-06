const mercadopago = require('mercadopago');
require('dotenv').config

const mpLinkGenController = async (cart) => {

    mercadopago.configure({
        //la idea es esto hacerlo con una variable de entorno pero por el momento dejame el de prueba
        access_token: process.env.MERCADOPAGO_KEY 
    });

    const URL = process.env.URL_BACK //aca va la URL del back deployado

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
            success: `${process.env.URL_CLIENT}/success`, //aca va la URL de la view que hizo valen para el success
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