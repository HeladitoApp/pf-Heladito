const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const compraSchema = new Schema(
  {
    usuario: String,
    productos: Array,
    sumaTotal: Number,
    metodoDePago: String,
    pagado: Boolean,
  },
  { timestamps: true }
);

const Compra = mongoose.model("Compra", compraSchema);
module.exports = Compra;
