const { allTiposProductos } = require("../utils/allTiposProductos");
const { allTiposExtra } = require("../utils/allTiposExtra")

async function getAllTiposController(req, res) {
  try {
    const tipoProductos = await allTiposProductos();
    const tipoExtras = await allTiposExtra();

    const tiposFinal = [...tipoProductos, ...tipoExtras];

    tiposFinal.length
      ? res.send(tiposFinal)
      : res.status(502).send({
          message: "Error al cargar los type de Productos y Extras desde la DB",
        });
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  getAllTiposController,
};
