const Productos = require("../models/Productos");

async function allProductos() {
  try {
    const productos = await Productos.find();
    if (!productos.length) {
      throw new Error(
        "Error al cargar los Productos desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return productos;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allProductos,
};
