const { usuarioByMail } = require("../utils/getUserByMail");

async function getByMail(req, res) {
  const result = await usuarioByMail(req);
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
  getByMail,
};