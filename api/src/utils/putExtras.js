const Extras = require("../models/Extras");

async function updateExtra(body) {
  try {
    if (!body) {
      throw new Error("Error. No se ha podido actualizar el Extra");
    } else {
      const update = Extras.updateOne(
        { _id: body._id },
        {
          $set: body,
        }
      );
      return update;
    }
  } catch (error) {
    console.error({ message: error.message });
  }
}

module.exports = {
  updateExtra,
};
