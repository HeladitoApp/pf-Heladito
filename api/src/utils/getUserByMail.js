const Usuarios = require("../models/Usuarios");

async function usuarioByMail(req, res) {
  const mailUser = req.body.email;
  
  try {
    const userBymail = await Usuarios.find({ email:mailUser });
    if (!userBymail) {
      throw new Error(
        "Error al cargar el id desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      return userBymail;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  usuarioByMail,
};