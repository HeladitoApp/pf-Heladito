const { allHelados } = require("../utils/allHelados");

async function getAllHelados(req, res) {
  const result = await allHelados();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Productos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getAllHelados,
};