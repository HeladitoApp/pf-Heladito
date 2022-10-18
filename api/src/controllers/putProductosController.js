const { updateProducto } = require("../utils/putProductos");

async function putProductoController(req, res) {
  const info = req.body;
  try {
    const result = await updateProducto(info);

    result
      ? res.status(200).send({
          message: `Se ha actualizado el Producto de forma exitosa`,
        })
      : res.status(502).send({
          message:
            "No se ha podido actualizar el Producto. Verifique que los datos pasados sean correctos",
        });
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  putProductoController,
};
