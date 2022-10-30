const { getFeedbacks } = require("../utils/getFeedbacks");

async function getFeedbacksController(req, res) {
  try {
    const result = await getFeedbacks();

    result
      ? res.status(200).send(result)
      : res.status(502).send({
          message:
            "Error al cargar los Feedbacks desde la DB. Verifique que la informacion pasada sea la correcta",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
    getFeedbacksController,
};
