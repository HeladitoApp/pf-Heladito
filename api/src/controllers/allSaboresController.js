const { allSabores } = require("../utils/allSabores");

async function getAllSabores(req, res) {
  const result = await allSabores();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Productos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getAllSabores,
};