const Compra = require("../models/Compras");

async function allCompras() {
  try {
    const compras = await Compra.find();
    if (!compras.length) {
      throw new Error(
        "Error al cargar los productos de la compra desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return compras;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allCompras,
};
