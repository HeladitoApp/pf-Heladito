const Usuarios = require("../models/Usuarios");

async function postUsuarios(data) {
  try {
    const newInfo = new Usuarios();
    if (!data) {
      throw new Error(
        "Error al crear el ususario. Verifique que la informacion ingresada sea a correcta"
      );
    } else {
         
      newInfo.name = data.name;
      newInfo.password = data.password;
      newInfo.rol = data.rol;
      newInfo.mail = data.mail;
      newInfo.activo = data.activo;
      
      newInfo.save();
      return newInfo;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
    postUsuarios,
};

