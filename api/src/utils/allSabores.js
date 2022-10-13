const Extras = require("../models/Extras");

async function allSabores() {
  try {
    const sabores = await Extras.find({ type: "sabores" });
    if (!sabores.length) {
      throw new Error(
        "Error al cargar los Sabores desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return sabores;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allSabores,
};
