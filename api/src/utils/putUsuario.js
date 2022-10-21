const Usuarios = require("../models/Usuarios");

async function updateUsuario(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Usuario");
    } else {
      console.log(body);
      const usuarioId = await Usuarios.find({ _id: body._id });
      const update = Usuarios.updateOne(
        { _id: body._id },
        {
          name: body.name? body.name : usuarioId.name,
          password: body.password? body.password : usuarioId.password,
          mail: body.mail? body.mail : usuarioId.mail,
          activo: body.activo? body.activo : usuarioId.activo,
          rol: body.rol? body.rol : usuarioId.rol
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
