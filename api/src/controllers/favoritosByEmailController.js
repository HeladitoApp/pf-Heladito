const { favsByEmail } = require("../utils/favsByEmail");


async function getFavsByEmail(req,res){
    const email = req.params.email
    try {
        const user = await favsByEmail(email)
        user
        ? res.status(200).send(user)
        : res.status(502).send({ message: "Error al cargar las compras del usuario desde la DB" });
        
    } catch (e) {
        console.error({ message: e.message });

    }
}

module.exports = {
    getFavsByEmail,
};