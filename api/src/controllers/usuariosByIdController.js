const { usuarioById } = require("../utils/usuarioById");

async function getUsuarioById(req, res) {
  const result = await usuarioById(req);
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({
          message: "No hay Productos asociados con este id, verificar en DB",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  getUsuarioById,
};