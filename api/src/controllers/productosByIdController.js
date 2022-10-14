const { productoById } = require("../utils/productosById");

async function getById(req, res) {
    const result = await productoById(req); 
    try {
      result
        ? res.status(200).send(result)
        : res.status(502).send({ message: "No hay Productos asociados con este id, verificar en DB" });
    } catch (error) {
      console.error({ message: error.message });
    }
  
}


module.exports = {
  getById,
};
