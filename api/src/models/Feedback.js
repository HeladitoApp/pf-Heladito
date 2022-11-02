const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
  {
    name: String,
    picture: String,
    conformidad: String,
    puntaje: String,
    aspecto: String,
    descripcion: String,
    aprobado: Boolean,
  },
  { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;
