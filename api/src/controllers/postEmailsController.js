const { postEmails } = require("../utils/postEmails");

async function postEmailsController(req, res) {
  const data = req.body;
  try {
    const result = await postEmails(data);

    result
      ? res.status(200).send({ message: result })
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
