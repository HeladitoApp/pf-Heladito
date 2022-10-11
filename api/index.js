const mongoose = require ('mongoose');
const server = require('./app.js');
const port=3800 

mongoose.connect('mongodb+srv://heladitosapp:grupo06@cluster0.4vule79.mongodb.net/heladitos')
.then(()=>{
   console.log('La conexion a MongoDB se ha realizado correctamente')

    server.listen(port,()=>{
       console.log('El servidor esta corriendo en localhost:3800')
   }) 
})
.catch(err=> console.log(err));   