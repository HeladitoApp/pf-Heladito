const AdminInbox = require("../models/AdminInbox");

async function createAdminInbox(data) {
  try {
    const newMessage = new AdminInbox();
    if (!data) {
      throw new Error(
        "Error al subir el Mensaje a la DB"
      );
    } else {
      newMessage.name = data.name;
      newMessage.lastname = data.lastname;
      newMessage.email = data.email;
      newMessage.contact = data.contact;
      newMessage.message = data.message;

      newMessage.save();
      return newMessage;
    }
  } catch (error) {
    console.error(`${error.name} : ${error.message}`);
  }
}

module.exports = {
  createAdminInbox,
};
