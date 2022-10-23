const Usuarios = require("../models/Usuarios");

async function finderUnique(valueToFind) {

    try {
        const found = await Usuarios.findOne(valueToFind);
        if (!found) {
            throw new Error(
                `No se encontró ${found} en la DB. Consulte con Marcos el problema del back`
            );
        } else {
            return found;
        }
    } catch (error) {
        console.error(`${error.name} : ${error.message}`);
    }
}

module.exports = {
    finderUnique,
};

exports.onExecutePostLogin = async (event, api) => {
    const axios = require('axios')
    const user = event.user

    const ManagementClient = require('auth0').ManagementClient;
    const management = new ManagementClient({
        domain: event.secrets.domain,
        clientId: event.secrets.clientId,
        clientSecret: event.secrets.clientSecret,
    });

    user.user_id = 'google-oauth2|106417672912495863207'

    try {
        const res = await management.getUser({ id: user.user_id })
        const userFounded = {
            name: res.name,
            apodo: res.nickname,
            picture: res.picture,
            connection: res.identities.connection,
            email: res.email,
            phone_number: res.phone_number,
            email_verified: res.email_verified,
            role: 'client',
            created_at: res.created_at,
            update_at: res.updated_at
        }
        const userPosted = await axios.post(`pf-heladito-production.up.railway.app/usuario`, userFounded)

        return userPosted
    }
    catch (e) {
        console.log(e)
    }

};
