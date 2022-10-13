const { allSecos } = require("../utils/allSecos");

async function getAllSecos(req, res) {
  const result = await allSecos();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Secos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getAllSecos,
};