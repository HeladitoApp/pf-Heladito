const Usuarios = require("../models/Usuarios");

async function postUsuarios(req, res) {
  const {name, password, rol, mail,activo, compras} = req.body
  try {
    const newInfo = new Usuarios({
     name,
     password, 
     rol, 
     mail,
     activo, 
     compras
    });
    if (!name) {
      throw new Error(
        "Error al crear el ususario. Verifique que la informacion ingresada sea a correcta"
      );
    } else {
         
      /* newInfo.name = data.name;
      newInfo.password = data.password;
      newInfo.rol = data.rol;
      newInfo.mail = data.mail;
      newInfo.activo = data.activo;
      newInfo.compras =data.compras */
      
      newInfo.save();
      return newInfo;}
    
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
    postUsuarios,
};
