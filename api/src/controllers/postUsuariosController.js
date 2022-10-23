const { postUsuarios } = require("../utils/postUsuarios");
const { updateUsuario } = require("../utils/updateUsuario");


async function postUsuariosController(req, res) {
  //const info = req.body;
  try {
    const userBymail = await Usuarios.find({ email: req.email })
    if (!userBymail) await postUsuarios(req);
    await updateUsuario(req)

    result
      ? res.status(200).send(result)
      : res.status(502).send({
        message: "Error al subir el Usuario a la BD",
      });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  postUsuariosController,
};
