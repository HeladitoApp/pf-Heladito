const { createTransporter } = require("../controllers/nodeMailer/emailer");
const {
  anuncioHtml,
} = require("../controllers/nodeMailer/PlantillasEmail/anuncioHTML");
const Usuarios = require("../models/Usuarios");

async function postEmails(data) {
  const anuncio = data;

  try {
    const mensajeHtml = await anuncioHtml(anuncio);

    const users = await Usuarios.find(null, { email: 1, _id: 0, activo: true });

    const filterUser = users.filter((e) => e.activo == true);
    const emailUsers = filterUser.map((e) => e.email);

    if (!anuncio) {
      throw new Error(
        "Error al crear el Email. No se ha enviado el Email a los usuarios"
      );
    } else {
      async function sendMail(emailUsers) {
        const transporter = createTransporter();
        const info = await transporter.sendMail({
          from: process.env.EMAIL,
          /* to: process.env.EMAIL, */
          bcc: emailUsers,
          subject: `¡No te lo pierdas! Descubre novedades en HeladitosApp🍦`,
          html: mensajeHtml, //todo el html del mensaje
        });
        console.log("mensaje enviado: %s", info.messageId);
      }

      sendMail(emailUsers);

      return "El mensaje se ha enviado correctamente";
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postEmails,
};
