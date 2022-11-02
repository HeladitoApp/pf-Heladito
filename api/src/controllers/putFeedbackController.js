const { updateFeedback } = require("../utils/updateFeedback");

async function putFeedbackController(req, res) {
  const info = req.body;
  try {
    const result = await updateFeedback(info);

    result
      ? res.status(200).send({
          message: `Se ha posteado correctamente la nueva reseña`,
        })
      : res.status(502).send({
          message:
            "No se ha podido postear la reseña. Verifique que los datos pasados sean correctos",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  putFeedbackController,
};