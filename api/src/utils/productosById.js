const Productos = require("../models/Productos");

async function productoById(req, res) {
    const idProduct = req.params.id
    try {
        const productoId= await Productos.find({_id:idProduct})
        if(!productoId){
            throw new Error(
              "Error al cargar el id desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
            );
          } else { 
            return productoId /* res.status(200).send({productoId}) */;
          }
        } catch (error) { 
           /*  res.status(404).send({
                message: 'No hay Helados'}) */
        console.error(`${error.name} : ${error.message}`);
        }
}

module.exports = {
    productoById,
  };