const Usuario = require("../models/Usuarios");

async function usuarioById(req, res) {
  const idUsuario = req.params.id;
  try {
    const usuarioId = await Usuario.find({ _id: idUsuario });
    if (!usuarioId) {
      throw new Error(
        "Error al cargar el id desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return usuarioId;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  usuarioById,
};