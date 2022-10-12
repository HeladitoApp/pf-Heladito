require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./app.js");
const port = 3800;

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

  //OJOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO poner en archivo .env esto: 
  //ADMIN_ID="mongodb+srv://heladitosapp:grupo06@cluster0.4vule79.mongodb.net/heladitos"
