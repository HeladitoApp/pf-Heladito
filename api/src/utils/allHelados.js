const Productos = require("../models/Productos");

async function allHelados() {
  try {
    const helados = await Productos.find({ type: "helados"});
    if (!helados.length) {
      throw new Error(
        "Error al cargar los Productos desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return helados;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
    allHelados,
};