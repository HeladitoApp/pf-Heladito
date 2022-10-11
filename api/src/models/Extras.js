const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const extrasSchema = new Schema({
  id: Number,
  name: String,
  image: String,
  price: Number,
  stock: Number,
  type: String,
});

const Extras = mongoose.model("Extras", extrasSchema);
module.exports = Extras;
