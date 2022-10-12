const Extras = require("../models/Extras");

async function allSecos() {
  try {
    const secos = await Extras.find({ type: { $regex: "secos" } });
    if (!secos.length) {
      throw new Error(
        "Error al cargar los Productos desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return secos;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allSecos,
};
