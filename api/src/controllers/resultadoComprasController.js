const { Respuestasuccess } = require("../utils/respuestaCompras");

async function resultadoCompras(req, res) {
    const datos = req.query

    try {
        let result;
        if(datos.status === "approved"){
            result = await Respuestasuccess(datos)
        }
        result
        ? res.status(200).redirect(result)
        : res.status(502).send({
            message: "Error en actualizar la compra",
          });
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    resultadoCompras,
  };