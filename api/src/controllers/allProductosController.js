const { allProductos } = require("../utils/allProductos");
const { queryFunction } = require("../utils/getQuery");

async function getAllProducts(req, res) {
  const name = req.query.name;
  try {
    if (name) {
      let query = await queryFunction(name);
      query.length
        ? res.status(200).send(query)
        : res.status(502).send({
            message: "No se ha encontrado el producto que estás buscando",
          });
    } else {
      const result = await allProductos();
      result
        ? res.status(200).send(result)
        : res
            .status(502)
            .send({ message: "Error al cargar los Productos desde la DB" });
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  getAllProducts,
};
