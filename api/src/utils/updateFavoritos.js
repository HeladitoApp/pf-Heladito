const Usuarios = require("../models/Usuarios");

async function updateFavorito(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Usuario");
    } else {
      
      const update = Usuarios.updateOne({_id: body._id },{$push:{favoritos:body.favoritos[0]}})
/*         { _id: body._id },
        {favoritos: body.favoritos ? body.favoritos : usuarioId.favoritos,},
        {
          $inc: body,
        },
      ); */
      return update;
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    updateFavorito,
};
