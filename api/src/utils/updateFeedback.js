const Feedback = require("../models/Feedback");

async function updateFeedback(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Feedback");
    } else {
      //console.log(body);
      const FeedbackId = await Feedback.find({ _id: body._id });
      const update = Feedback.updateOne(
        { _id: body._id },
        {
          name: body.name ? body.name : FeedbackId.name,
          picture: body.picture ? body.picture : FeedbackId.picture,
          conformidad: body.conformidad ? body.conformidad : FeedbackId.conformidad,
          puntaje: body.puntaje ? body.puntaje : FeedbackId.puntaje,
          aspecto: body.aspecto ? body.aspecto : FeedbackId.aspecto,
          descripcion: body.descripcion ? body.descripcion : FeedbackId.descripcion,
          aprobado: body.aprobado ? body.aprobado : usuarioId.aprobado,
        },
        {
          $set: body,
        }
      );
      return update;
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  updateFeedback,
};
