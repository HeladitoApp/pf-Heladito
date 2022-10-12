const { allProductos } = require("../utils/allProductos");

async function getAllProducts(req, res) {
  const result = await allProductos();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Productos desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
};
