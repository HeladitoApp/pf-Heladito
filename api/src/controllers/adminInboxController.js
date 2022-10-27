const { createAdminInbox } = require("../utils/adminInbix");

async function adminInboxController(req, res) {
  const info = req.body;

  try {
    const result = await createAdminInbox(info);

    result
      ? res.status(200).send(result)
      : res.status(500).send({
          message:
            "Error al subir el Mensaje a la DB. Verifique que la informacion ingresada sea a correcta",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  adminInboxController,
};
