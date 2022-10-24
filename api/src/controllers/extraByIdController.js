const { extraById } = require("../utils/extraById");

async function getExtraById(req, res) {
  const result = await extraById(req);
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({
          message: "No hay Productos asociados con este id, verificar en DB",
        });
  } catch (error) {
    console.error({ Esteotroerrormessage: error.message });
  }
}

module.exports = {
    getExtraById,
};