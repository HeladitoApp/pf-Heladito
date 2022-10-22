const Usuarios = require("../models/Usuarios");

async function queryUsuario(name) {
  try {
    const user = await Usuarios.find().populate('compras',{
      productos:1,
      sumaTotal: 1,
      metodoDePago: 1,
      pagado: 1,
    } );
    if (!user.length) {
      throw new Error(
        "Error al encontrar el Usuario que estas buscando. Revise posibles problemas con la BD"
      );
    } else {
      const userFiltered = user.filter((e) => e.name?.toLowerCase().includes(name.toLowerCase())
      );
      return userFiltered;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  queryUsuario,
};
