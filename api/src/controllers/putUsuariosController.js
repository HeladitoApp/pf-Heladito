const { updateUsuario } = require("../utils/updateUsuario");

async function putUsuariosController(req, res) {
  const info = req.body;
  //console.log(info);
  try {
    const result = await updateUsuario(info);

    result
      ? res.status(200).send({
        message: `Se ha actualizado su Usuario de forma exitosa`,
      })
      : res.status(502).send({
        message:
          "No se ha podido actualizar el ususario. Verifique que los datos pasados sean correctos",
      });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  putUsuariosController,
};
