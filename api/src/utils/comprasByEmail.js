const Compras = require("../models/Compras");
const Usuarios = require("../models/Usuarios");

async function comprasByEmail(email){
    try {
        const user = await Usuarios.findOne({ email: email });
        if (user) {
            const compra = await Compras.find({_id:user.compras})
            if (compra) {
                return compra;
            }else{
                throw new Error(
                    "Error al cargar las compras del Usuario"
                  );
            }
        } else {
            throw new Error(
                "Error al cargar el Usuario desde la DB. Verifique el email enviado"
              );
        }
        return compra
    } catch (e) {
        console.error({ message: e.message });
    }
}

module.exports = {
    comprasByEmail,
  };