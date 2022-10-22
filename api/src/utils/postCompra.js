const Compras = require("../models/Compras");
const Productos = require("../models/Productos");
const Usuarios = require("../models/Usuarios");

async function postCompra(req, res) {
  const { productos,/*  metodoDePago, pagado, */ usuario,total } = req.body;

  const productsId = productos.map(p=> {
    return (
   { _id:`${p.category_id}`,name:`${p.title}`,quantity:`${p.quantity}`,price:`${p.unit_price}` } 
)})
await Promise.all(
  productsId.map( async(p)=>{
    await Productos.update(
      {_id: p._id},
      {
        $inc: { stock: -p.quantity }
      }
  )}))
  const user = await Usuarios.findOne({email: "ccobo1405@gmail.com" });


  const NewCompra = new Compras({
    productos: productsId,
     sumaTotal: total,
    // metodoDePago: "mercadopago",
    // pagado: true,
    usuario: user.name, //con user._id sólo me trae el id del usuario sino pongo nada me trae toooodo el objeto
  });

  try {
    if (!productos) {
      throw new Error(
        "Error al subir el Producto a la DB. Verifique que la informacion ingresada sea a correcta"
      );
    } else {
      const savedCompra = await NewCompra.save();
      user.compras = user.compras.concat(savedCompra);
      await user.save();
      return NewCompra;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postCompra,
};
