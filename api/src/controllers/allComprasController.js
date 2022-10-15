const { allCompras } = require("../utils/allCompras");

async function getAllCompras(req, res) {
  const result = await allCompras();
  try {
    result
      ? res.status(200).send(result)
      : res
          .status(502)
          .send({ message: "Error al cargar las Compras desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  getAllCompras,
};
