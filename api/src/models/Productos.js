const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productosSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  price: mongoose.Types.Decimal128,
  stock: Number,
  type: String,
});

const Productos = mongoose.model("Productos", productosSchema);
module.exports = Productos;
