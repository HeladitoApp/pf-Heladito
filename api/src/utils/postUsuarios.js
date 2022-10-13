const Usuarios = require("../models/Usuarios");

async function postUsuarios(data) {
  try {
    const newInfo = new Usuarios();
    if (!data) {
      throw new Error(
        "Error al subir el Producto a la DB. Verifique que la informacion ingresada sea a correcta"
      );
    } else {
         
      newInfo.name = data.name;
      newInfo.password = data.password;
      newInfo.rol = data.rol;
      newInfo.mail = data.mail;
      newInfo.Activo = data.Activo;
      
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
