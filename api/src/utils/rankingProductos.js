const Compras = require("../models/Compras");

async function rankingMejoresCompras() {
  try {
    const ProductosMasvend = await Compras.find(null, { productos: 1, _id: 0 });

    const ArraydeObjProduc = ProductosMasvend.map((p) => {
      return p.productos;
    });

    const reducer = (accumulator, curr) => accumulator.concat(curr);
    const prodCompradosJuntos = ArraydeObjProduc.reduce(reducer);

    if (!prodCompradosJuntos.length) {
      throw new Error(
        "Error al cargar los Productos más vendidos desde la DB. Verifique posibles problemas en la relacion del Back con la DB"
      );
    } else {
      key = "name";

      let arr2 = [];

      prodCompradosJuntos.forEach((x) => {
        // Checking if there is any object in arr2
        // which contains the key value
        if (
          arr2.some((val) => {
            return val[key] == x[key];
          })
        ) {
          // If yes! then increase the occurrence by 1
          arr2.forEach((k) => {
            if (k[key] === x[key]) {
              k["occurrence"]++;
            }
          });
        } else {
          // If not! Then create a new object initialize
          // it with the present iteration key's value and
          // set the occurrence to 1
          let a = {};
          a[key] = x[key];
          a["occurrence"] = 1;
          arr2.push(a);
        }
      });
      const orden = arr2.sort(function (a, b) {
        return b.occurrence - a.occurrence;
      });

      return orden;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  rankingMejoresCompras,
};
