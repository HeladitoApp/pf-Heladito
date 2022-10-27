const nodemailer = require("nodemailer");
require("dotenv").config();

function createTransporter() {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        //credenciales del usuario
        user: process.env.EMAIL,
        pass: process.env.PASS_EMAIL,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    return transporter;
  } catch (error) {
    console.error(error);
  }
}

/* const infoMail = (users) => {
  return {
    from: process.env.EMAIL,
    to: `itsmarcos.1up@gmail.com`,
    subject: `¡No te lo pierdas! Descubre novedades en HeladitosApp 🍦!`,
    //todo el html que va en el body:
    html: ,
    // attachments: [{filename: "", path: ""},]
  };
}; */

const mensajeHtml = anuncioHtml(anuncio)

async function sendMail(users) {
  const transporter = createTransporter();
  const info = await transporter.sendMail({
    from: process.env.EMAIL,
    to: `itsmarcos.1up@gmail.com`,
    subject: `¡No te lo pierdas! Descubre novedades en HeladitosApp 🍦`,
    //todo el html que va en el body:
    html: await mensajeHtml,
    // attachments: [{filename: "", path: ""},]
  });
  console.log("mensaje enviado: %s", info.messageId);
}

exports.sendMailController = (users) => sendMail(users);
