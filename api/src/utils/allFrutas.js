const Extras = require("../models/Extras");

async function allFrutas() {
  try {
    const frutas = await Extras.find({ type: { $regex: "frutas" } });
    if (!frutas.length) {
      throw new Error(
        "Error al cargar las Frutas desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return frutas;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allFrutas,
};
