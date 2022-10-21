const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuariosSchema = new Schema(
  {
    name: { type: String },
    apodo: {type: String},
    picture:{type:String},
    connection:{type:String},
    email: { type: String},
    phone_number:{type:Number},
    password: String,
    activo: {type: Boolean, default:true}, 
    rol: {type:String},
    compras: [{type:Schema.Types.ObjectId, ref: 'Compras'}] ,
    created_at: {type:String},
    update_at: {type:String}
  },
 
);

const Usuarios = mongoose.model("Usuarios", usuariosSchema);
module.exports = Usuarios; 


