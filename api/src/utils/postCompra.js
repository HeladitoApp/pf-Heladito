const Compras = require("../models/Compras");
const Productos = require("../models/Productos");
const Usuarios = require("../models/Usuarios");

async function postCompra(req, res) {
  const { productos, sumaTotal, metodoDePago, pagado, usuario } = req.body;

  const listaProductos = await Productos.find({ _id: productos }, { name: 1 ,price:1});
  const sumaProductos = listaProductos.map(p => {
    return (Suma=p.price
      )})
const reducer = (accumulator, curr) => accumulator + curr;
const sumaPrecios= sumaProductos.reduce(reducer);

  
  console.log(sumaProductos)

  const user = await Usuarios.findById(usuario);
  const NewCompra = new Compras({
    productos: listaProductos,
    sumaTotal: sumaPrecios,
    metodoDePago,
    pagado,
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
