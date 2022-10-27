const Usuarios = require("../models/Usuarios");

async function postEmails(req, res) {
  const anuncio = req.body;

  try {
    //const infoUsers = await Usuarios.find();
    if (!anuncio) {
      throw new Error(
        "Error al crear el Email. No se ha enviado el Email a los usuarios"
      );
    } else {
      
      // emailer.sendMailController(newInfo);
      return newInfo;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postEmails,
};
