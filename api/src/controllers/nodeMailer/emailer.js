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
    console.log(error);
  }
}

const infoMail = (user) => {
  return {
    from: process.env.EMAIL,
    to: `${user.mail}`,
    subject: `Hola ${user.name}. ¡Bienvenid@ a HeladitosApp 🍦!`,
    //todo el html que va en el body:
    html: "<b>texto de ejemplo pal body, nene</b> <p>OJO QUE TAMBIEN SE PUEDE USAR UN ARCHIVO HTML COMO VARIABLE A IMPORTAR</p>",
    /* attachments: [
      {
        filename: "",
        path: "",
      },
    ], */
  };
};

async function sendMail(user) {
  const transporter = createTransporter();
  const info = await transporter.sendMail(infoMail(user));
  console.log("mensaje enviado: %s", info.messageId);
}

exports.sendMailController = (user) => sendMail(user);
