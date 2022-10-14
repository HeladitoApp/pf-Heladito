const Productos = require("../models/Productos");

async function allCombos() {
  try {
    const combos = await Productos.find({ type: "combos" });
    if (!combos.length) {
      throw new Error(
        "Error al cargar los Combos desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return combos;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allCombos,
};
