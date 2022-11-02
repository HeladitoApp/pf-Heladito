const Usuario = require("../models/Usuarios");
const Compra = require("../models/Compras");

async function ReporteCompras(fechaInicial,fechaFinal) {
  try {
    const compras = await Compra.find(
        { 
            $and: [
              {createdAt: {$gte: new Date(fechaInicial)}},
              {createdAt: {$lte: new Date(fechaFinal)}}
            ]
          }
    ); 
    return compras;
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
    ReporteCompras,
};