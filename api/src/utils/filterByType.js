const Productos = require("../models/Productos");

async function filterByTypeFunction(typeFilter) {
  try {
    const filtro = await Productos.find({ type: typeFilter });
    if (!filtro) {
      throw new Error(
        "Error al cargar el Tipo desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return filtro;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  filterByTypeFunction,
};
