const Usuarios = require("../models/Usuarios");

async function rankingDeusuarios() {
  try {
    const users = await Usuarios.find(null,{_id:1,name:1,__v:1,compras:1}).sort({__v:-1 })/* .populate('compras',{
      productos:1,
    } ); */
    if (!users.length) {
      throw new Error(
        "Error al cargar los Usuarios desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return users;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
    rankingDeusuarios,
};
