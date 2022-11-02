const AdminInbox = require("../models/AdminInbox");

async function allAdminInbox() {
  try {
    const result = await AdminInbox.find();
    if (!result) {
      throw new Error("Error al encontrar los Mensajes a la DB");
    } else {
      return result;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  allAdminInbox,
};