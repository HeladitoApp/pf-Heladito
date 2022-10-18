const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comprasSchema = new Schema(
  {
    usuario: String,
    productos: Array,
    sumaTotal: Number,
    metodoDePago: String,
    pagado: Boolean,
  },
  { timestamps: true }
);

const Compras = mongoose.model("Compras", comprasSchema);
module.exports = Compras;
