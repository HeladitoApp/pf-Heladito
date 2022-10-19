const Productos = require("../models/Productos");

async function allTiposProductos() {
  try {
    const tipos = await Productos.find(null, { type: 1, _id: 0 });

    const result = tipos.reduce((final, current) => {
      let obj = final.find((el) => el.type === current.type);
      if (obj) {
        return final;
      } else {
        return final.concat([current]);
      }
    }, []);

    return result;
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allTiposProductos,
};
