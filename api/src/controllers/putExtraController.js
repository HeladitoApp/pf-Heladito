const { updateExtra } = require("../utils/putExtras");

async function putExtraController(req, res) {
  const info = req.body;
  try {
    const result = await updateExtra(info);

    result
      ? res.status(200).send({
          message: `Se ha actualizado el Extra de forma exitosa`,
        })
      : res.status(502).send({
          message:
            "No se ha podido actualizar el Extra. Verifique que los datos pasados sean correctos",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    putExtraController,
};
