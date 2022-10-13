const { postExtra } = require("../utils/PostExtras");

async function postExtraController(req, res) {
  const info = req.body;
  try {
    const result = await postExtra(info);

    result
      ? res.status(200).send(result)
      : res.status(502).send({
          message:
            "Error al subir el Producto a la DB. Verifique que la informacion ingresada sea a correcta",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  postExtraController,
};
