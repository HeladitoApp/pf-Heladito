const {  rankingDeusuarios } = require("../utils/rankingDeUsuarios");
const { queryUsuario } = require("../utils/getQueryUsuarios");

async function getRankingUsuariosCont(req, res) {
  const name = req.query.name;
  try {
    if (name) {
      let query = await queryUsuario(name);
      query.length
        ? res.status(200).send(query)
        : res.status(502).send({
            message: "No se ha encontrado el Usuario que estás buscando",
          });
    } else {
      const result = await rankingDeusuarios();
      result
        ? res.status(200).send(result)
        : res
            .status(502)
            .send({ message: "Error al cargar los Usuarios desde la DB" });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}
module.exports = {
  getRankingUsuariosCont,
};