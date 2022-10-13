const Extras = require("../models/Extras");

async function postExtra(data) {
  try {
    const newInfo = new Extras();
    if (!data) {
      throw new Error(
        "Error al subir el Extra a la DB. Verifique que la informacion ingresada sea a correcta"
      );
    } else {
      newInfo.id = data.id;
      newInfo.name = data.name;
      newInfo.image = data.image;
      newInfo.price = data.price;
      newInfo.stock = data.stock;
      newInfo.type = data.type;

      newInfo.save();
      return newInfo;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  postExtra,
};
