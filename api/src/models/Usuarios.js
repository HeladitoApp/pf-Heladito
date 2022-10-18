const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
  {
    name: { type: String, require: true },
    mail: { type: String, require: true },
    password: String,
    activo: Boolean,
    rol: String,
    compras: [{type:Schema.Types.ObjectId, ref: 'Compras'}] ,
  },
  { timestamps: true }
);

const Usuarios = mongoose.model("Usuarios", usuariosSchema);
module.exports = Usuarios;