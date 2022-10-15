const Usuarios = require("../models/Usuarios");

async function updateProducto(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Usuario");
    } else {
      const update = Usuarios.updateOne(
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
