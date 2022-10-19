require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./app.js");
const port = process.env.SERVER_PORT || 3800;

mongoose
  .connect(
  process.env.ADMIN_ID 
  )
  .then(() => {
    console.log("La conexion a MongoDB se ha realizado correctamente");

    server.listen(port, () => {
      console.log("El servidor esta corriendo en localhost:3800");
    });
  })
  .catch((err) => console.log(err));

  
