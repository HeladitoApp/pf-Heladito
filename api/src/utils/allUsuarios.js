const Usuarios = require("../models/Usuarios");

async function allUsuarios() {
  try {
    const users = await Usuarios.find();
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
    allUsuarios,
};
