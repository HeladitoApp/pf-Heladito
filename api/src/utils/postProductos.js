const Productos = require("../models/Productos");

async function postProductos(data) {
  try {
    const newInfo = new Productos();
    if (!data) {
      throw new Error(
        "Error al subir el Producto a la DB. Verifique que la informacion ingresada sea a correcta"
      );
    } else {
      newInfo.id = data.id;
      newInfo.name = data.name;
      newInfo.description = data.description;
      newInfo.image = data.image;
      newInfo.price = data.price;
      newInfo.stock = data.stock;
      newInfo.type = data.type;

      newInfo.save();
      return newInfo;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postProductos,
};
