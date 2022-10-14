const Productos = require("../models/Productos");

async function queryFunction(name) {
  try {
    const productos = await Productos.find();
    if (!productos.length) {
      throw new Error(
        "Error al encontrar el producto que estas buscando. Revise posibles problemas con la BD"
      );
    } else {
      const productosfiltered = productos.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
      return productosfiltered;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  queryFunction,
};
