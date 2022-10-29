const Usuarios = require("../models/Usuarios");

async function favsByEmail(email){
    try {
        const user = await Usuarios.findOne({ email: email });
        if (user) {
            //const favs = await Usuarios.find({favoritos: user.favoritos})
            if (user.favoritos) {
                return user.favoritos;
            }else{
                throw new Error(
                    "Error al cargar los favoritos del Usuario"
                  );
            }
        } else {
            throw new Error(
                "Error al cargar el Usuario desde la DB. Verifique el email enviado"
              );
        }
    } catch (e) {
        console.error({ message: e.message });
    }
}

module.exports = {
    favsByEmail,
  };