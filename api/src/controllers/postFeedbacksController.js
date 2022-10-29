const { postFeedback } = require("../utils/postFeedback");

async function postFeedbacksController(req, res) {
    const info = req.body;

    try {
        const result = await postFeedback(info);

        result
            ? res.status(200).send(result)
            : res.status(500).send({
                message:
                    "Error al subir el Feedback a la DB. Verifique que la informacion ingresada sea a correcta",
            });
    } catch (error) {
        console.error({ message: error.message });
    }
}

module.exports = {
    postFeedbacksController,
};