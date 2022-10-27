const Usuario = require("../models/Usuarios");
const Compra = require("../models/Compras");

async function ReporteCompras(req, res) {

  try {
    const compras = await Compra.find(
        { 
            $and: [
              {createdAt: {$gte: new Date("2022-10-20")}},
              {createdAt: {$lte: new Date("2022-10-27")}}
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