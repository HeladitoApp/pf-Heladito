const {  rankingMejoresCompras } = require("../utils/rankingProductos");

async function getProductoMasVend(req, res) {
  const result = await rankingMejoresCompras();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar el Ranking de productos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getProductoMasVend,
};