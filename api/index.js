require("dotenv").config();
const mongoose = require("mongoose");
const server = require("./app.js");
const PORT = process.env.PORT || 3800;

mongoose
  .connect(
  process.env.ADMIN_ID 
  )
  .then(() => {
    console.log("La conexion a MongoDB se ha realizado correctamente");

    server.listen(PORT, () => {
      console.log("El servidor esta corriendo en ", PORT);
    });
  })
  .catch((err) => console.log(err));

  
