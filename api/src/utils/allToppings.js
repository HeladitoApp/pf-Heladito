const Extras = require("../models/Extras");

async function allToppings() {
  try {
    const toppings = await Extras.find({ type: { $regex: "^toppings" } });
    if (!toppings.length) {
      throw new Error(
        "Error al cargar los Toppings desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return toppings;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allToppings,
};
