const Usuarios = require("../models/Usuarios");

async function updateUsuario(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Usuario");
    } else {
      //console.log(body);
      const usuarioId = await Usuarios.findOne({ email: body.email });
      //console.log(usuarioId)
      const update =  Usuarios.updateOne(
        { _id: usuarioId._id },
        {
          name: body.name ? body.name : usuarioId.name,
          password: body.password ? body.password : usuarioId.password,
          email: body.mail ? body.mail : usuarioId.email,
          activo: body.activo ? body.activo : usuarioId.activo,
          rol: body.rol ? body.rol : usuarioId.rol,
          apodo: body.apodo ? body.apodo : usuarioId.apodo,
          picture: body.image ? body.image : usuarioId.picture,
          connection: body.connection ? body.connection : usuarioId.connection,
          phone_number: body.phone_number ? body.phone_number : usuarioId.phone_number,
          activo: body.activo ? body.activo : usuarioId.activo,
          favoritos: body.favoritos ? body.favoritos : usuarioId.favoritos,
          created_at: body.created_at ? body.created_at : usuarioId.created_at,
          update_at: body.update_at ? body.update_at : usuarioId.update_at,
        },
        {
          $set: body,
        }
      );
      return update;
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  updateUsuario,
};
