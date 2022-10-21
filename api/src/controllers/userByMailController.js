const { usuarioByMail } = require("../utils/getUserByMail");
const { postUsuarios } = require("../utils/postUsuarios");

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

async function postUserByMail(req, res) {
  const result = await usuarioByMail(req);
  const info = await postUsuarios(result)
  try {
    info
      ? res.status(200).send(result)
      : res.status(502).send({
        message: "No hay Productos asociados con este id, verificar en DB",
      });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  getByMail, postUserByMail
};