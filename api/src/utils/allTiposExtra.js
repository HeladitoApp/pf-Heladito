const Extras = require("../models/Extras");

async function allTiposExtra() {
  try {
    const tiposExtra = await Extras.find(null, { type: 1, _id: 0 });

    const result = tiposExtra.reduce((final, current) => {
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
  allTiposExtra,
};
