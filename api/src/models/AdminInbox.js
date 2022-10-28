const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminInboxSchema = new Schema(
  {
    name: String,
    lastname: String,
    email: String,
    contact: String,
    message: String,
  },
  { timestamps: true }
);

const AdminInbox = mongoose.model("AdminInbox", adminInboxSchema);
module.exports = AdminInbox;
