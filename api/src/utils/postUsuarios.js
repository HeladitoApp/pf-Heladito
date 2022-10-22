const Usuarios = require("../models/Usuarios");
const emailer = require("../controllers/nodeMailer/emailer");

async function postUsuarios(req, res) {
  const { name, apodo, picture, connection, email, phone_number, password, activo, 
    rol, compras, created_at, update_at} = req.body;
  try {
    const newInfo = new Usuarios({
    name,
    apodo,
    picture,
    connection,
    email,
    phone_number,
    password,
    activo, 
    rol,
    compras ,
    created_at,
    update_at
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
      // emailer.sendMailController(newInfo);
      return newInfo;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postUsuarios,
};
