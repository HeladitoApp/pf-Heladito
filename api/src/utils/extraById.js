const Extras = require("../models/Extras");

async function extraById(req, res) {
  const idExtra = req.params.id;
  try {
    const extraId = await Extras.find({ _id: idExtra });
    if (!extraId) {
      throw new Error(
        "Error al cargar el id desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return extraId;
    }
  } catch (error) {
    console.error(`Este error${error.name} : ${error.message}`);
  }
}

module.exports = {
    extraById,
};