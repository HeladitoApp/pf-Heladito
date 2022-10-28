const Usuarios = require("../models/Usuarios");

async function updateFavorito(body) {
  try {
    console.log(body);
    if (!body) {
      throw new Error("Error. No se ha podido actualizar sus favoritos");
    } else {
      
      const update = Usuarios.updateOne({email: body.email },{$push:{favoritos: body.favorito}})
/* { _id: body._id },
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
