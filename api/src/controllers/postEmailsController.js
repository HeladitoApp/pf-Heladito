const { postEmails } = require("../utils/postEmails");

async function postEmailsController(req, res) {
  try {
    const result = await postEmails(req);

    result
      ? res.status(200).send("Mensaje enviado correctamente")
      : res.status(502).send({
          message: "Error al enviar el Email",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  postEmailsController,
};
