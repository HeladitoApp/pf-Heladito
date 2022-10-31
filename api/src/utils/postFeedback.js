const Feedback = require("../models/Feedback");

async function postFeedback(data) {
  try {
    const newFeedback = new Feedback();
    if (!data) {
      throw new Error(
        "Error al subir el Feedback a la DB"
      );
    } else {
      newFeedback.name = data.name;
      newFeedback.picture = data.picture;
      newFeedback.conformidad = data.conformidad;
      newFeedback.puntaje = data.puntaje;
      newFeedback.aspecto = data.aspecto;
      newFeedback.descripcion = data.descripcion;
      newFeedback.aprobado = false;
      
      newFeedback.save();
      return newFeedback;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postFeedback,
};
