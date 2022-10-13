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
            return productoId
          }
        } catch (error) { 
           
        console.error(`${error.name} : ${error.message}`);
        }
}

module.exports = {
    productoById,
  };