const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  name: {type:String, require:true},
  password: String,
  rol: String,
  mail: String,
  Activo:Boolean,
});

const Usuarios = mongoose.model("Usuarios", usuariosSchema);
module.exports = Usuarios; 