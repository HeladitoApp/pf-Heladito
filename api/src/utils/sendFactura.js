const { createTransporter } = require("../controllers/nodeMailer/emailer");
const {
  facturaHTML,
} = require("../controllers/nodeMailer/PlantillasEmail/facturaHTML");

async function sendFacturaMail(user, compra) {
  // console.log(user, compra,'Email Compras');
  try {
    if (!user) {
      throw new Error({
        message:
          "Error. El Email no fue enviado. Verificar los datos traidos desde el controlador de Mercado Pago",
      });
    } else {
      const transporter = createTransporter();
      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: user.usuario,
        subject: `¡Se acreditó tu pago! Heladitos App 🍦`,
        //todo el html que va en el body:
        html: await facturaHTML(),
        attachments: [
          {
            filename: "factura_heladitosApp.pdf",
            path: `${process.env.BACK_APP_SERVER_URL}/GeneraComprobante?compra_id=${compra._id}`,
          },
        ],
      });
      console.log("mensaje enviado: %s", info.messageId);
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  sendFacturaMail,
};
