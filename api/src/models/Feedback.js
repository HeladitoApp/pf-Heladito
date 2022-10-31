const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const feedbackSchema = new Schema(
    {
        email: String,
        conformidad: String,
        puntaje: String,
        email: String,
        aspecto: String,
        descripcion: String,
    },
    { timestamps: true }
);

const Feedback = mongoose.model("Feedback", feedbackSchema);
module.exports = Feedback;