const { allFrutas } = require("../utils/allFrutas");

async function getAllFrutas(req, res) {
  const result = await allFrutas();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Productos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getAllFrutas,
};