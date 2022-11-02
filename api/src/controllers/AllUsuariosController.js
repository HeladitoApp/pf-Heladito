const { allUsuarios } = require("../utils/allUsuarios");
const { queryUsuario } = require("../utils/getQueryUsuarios");
const { usuarioByQueryMail } = require("../utils/getUserQueryMail");

async function getAllUsuarios(req, res) {
  const name = req.query.name;
  const email = req.query.email;
  console.log(req.query)
  try {
    if (name) {
      let query = await queryUsuario(name);
      query?.length
        ? res.status(200).send(query)
        : res.status(502).send({
            message: "No se ha encontrado el Usuario que estás buscando",
          });
    } 
    if (email) {
      let query = await usuarioByQueryMail(email);
      query?.length
        ? res.status(200).send(query)
        : res.status(502).send({
            message: "No se ha encontrado el Usuario que estás buscando",
          });
    }
    
    else {
      const result = await allUsuarios();
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
  getAllUsuarios,
};
