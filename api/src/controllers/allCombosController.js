const { allCombos } = require("../utils/allCombos");

async function getAllCombos(req, res) {
  const result = await allCombos();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Combos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getAllCombos,
};