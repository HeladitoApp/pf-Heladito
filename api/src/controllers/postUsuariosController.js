const { postUsuarios } = require("../utils/postUsuarios");

async function postUsuariosController(req, res) {
  const info = req.body;
  try {
    const result = await postUsuarios(info);

    result
      ? res.status(200).send(result)
      : res.status(502).send({
          message:
            "Error al subir el Usuario a la BD ",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  postUsuariosController,
};
