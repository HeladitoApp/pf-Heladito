const { comprasByEmail } = require("../utils/comprasByEmail");


async function getCompraByEmail(req,res){
    const email = req.params.email
    try {
        const user = await comprasByEmail(email)
        user
        ? res.status(200).send(user)
        : res.status(502).send({ message: "Error al cargar las compras del usuario desde la DB" });
        
    } catch (e) {
        console.error({ message: e.message });

    }
}

module.exports = {
    getCompraByEmail,
};