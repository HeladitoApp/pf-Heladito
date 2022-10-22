const Productos = require("../models/Productos");

async function updateProducto(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Producto");
    } else {
      const productoId = await Productos.find({ _id: body._id });
      const update = Productos.updateOne(
        { _id: body._id },
        { name: body.name? body.name : productoId.name,
          description: body.description? body.description : productoId.description,
          image: body.image? body.image : productoId.image,
          price: body.price? body.price : productoId.price,
          stock: body.stock? body.stock : productoId.stock,
          type: body.type? body.type : productoId.type},
        {
          $set: body,
        }
      );
      return update;
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  updateProducto,
};
