const Productos = require("../models/Productos");

async function updateProducto(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Producto");
    } else {
      const update = Productos.updateOne(
        { _id: body._id },
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
