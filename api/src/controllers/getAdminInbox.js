const { allAdminInbox } = require("../utils/allAdminInbox");

async function getAdminInboxController(req, res) {
  try {
    const result = await allAdminInbox();

    result
      ? res.status(200).send(result)
      : res.status(502).send({
          message:
            "Error al cargar los Mensajes desde la DB. Verifique que la informacion pasada sea la correcta",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  getAdminInboxController,
};
