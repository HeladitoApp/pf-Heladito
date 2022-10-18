const { postCompra } = require("../utils/postCompra");

async function postCompraController(req, res) {
    //const data = req.body;

    try {
        const result = await postCompra(req)
        result
            ? res.status(200).send(result)
            : res.status(502).send({
                message:
                    "Error al subir la compra a la DB. Verifique que la informacion ingresada sea a correcta",
                });
    } catch (error) {
        console.error({ message: error.message });
    }
//   try {
//     const result = await postProductos(info);

//     result
//       ? res.status(200).send(result)
//       : res.status(502).send({
//           message:
//             "Error al subir el Producto a la DB. Verifique que la informacion ingresada sea a correcta",
//         });
//   } catch (error) {
//     console.error({ message: error.message });
//   }
}

module.exports = {
    postCompraController,
};
