const mongoose = require("mongoose");
const server = require("./app.js");
const { DB_USERS, DB_PASSWORD, DB_HOST } = process.env;
const port = 3800;

mongoose
  .connect(`mongodb+srv://${DB_USERS}:${DB_PASSWORD}@${DB_HOST}/heladitos`)
  .then(() => {
    console.log("La conexion a MongoDB se ha realizado correctamente");

    server.listen(port, () => {
      console.log("El servidor esta corriendo en localhost:3800");
    });
  })
  .catch((err) => console.log(err));
