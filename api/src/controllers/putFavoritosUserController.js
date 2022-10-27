const { updateFavorito } = require("../utils/updateFavoritos");

async function putFavoritosController(req, res) {
  const info = req.body;
  try {
    const result = await updateFavorito(info);

    result
      ? res.status(200).send({
        message: `Se ha actualizado sus favoritos de forma exitosa`,
      })
      : res.status(502).send({
        message:
          "No se ha podido actualizar sus productos favoritos. Verifique que los datos pasados sean correctos",
      });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    putFavoritosController,
};
