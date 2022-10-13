const { allToppings } = require("../utils/allToppings");

async function getAllToppings(req, res) {
  const result = await allToppings();
  try {
    result
      ? res.status(200).send(result)
      : res.status(502).send({ message: "Error al cargar los Toppings desde la DB" });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getAllToppings,
};