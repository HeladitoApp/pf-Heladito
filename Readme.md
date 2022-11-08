# Heladitos App - Proyecto Final SoyHenry

![Heladitos APP](./App%20Images/BannerHeladitos%20App.jpg)

Realizamos una aplicación web para la gestión de una heladería, con un escaparate virtual para la venta de sus productos al público en general donde los clientes podían buscar los productos por nombre y/o categoría y ordenarlos por precio. Luego de registrarse en la página pueden editar su información, guardar sus helados favoritos, realizar compras seguras con [Mercado Pago](https://www.mercadopago.com.pe/developers/es), realizar reviews de su experiencia en la plataforma y recibir en su correo electrónico los comprobantes de pagos de sus compras.


Por otro lado, creamos un panel de administración de la heladería a través de la cual los dueños pueden agregar y/o modificar sus productos, obtener un vistazo de cómo iba su negocio a través de un panel de estadísticas, generar reportes de ventas en Excel por un período determinado, gestionar el ingreso de nuevos administradores a la página y crear campañas promocionales a través de email, los cuales se envían desde la página gracias al uso de [Nodemailer](https://nodemailer.com/about/).

## Despliegue 📦

_Para el despligue del proyecto se utilizaron los siguientes servicios:_

* [Vercel](vercel.com) para el frontend
* [Railway](https://railway.app/) para el backend
* [MongoDb Atlas](https://www.mongodb.com/es/atlas/database) para la Base de Datos

 _Puede ver el proyecto completo [aquí](https://heladitos-app.vercel.app/)_

__

_Inicio_
![Presentacion](./App%20Images/1.%20Presentaci%C3%B3n.png)

_BotyHeladito_
![BotyHeladito](./App%20Images/2.%20BotyHeladito.png)

_Login_
![Login](./App%20Images/13.%20Authenticacion.png)

_Producto_
![Producto](./App%20Images/2.%20Producto.png)

_Carrito_
![Carrito](./App%20Images/3.%20Carrito%20de%20Compra.png)

_Pago de Producto_
![Producto](./App%20Images/5.%20CheckoutMercadoPago2.png)

_Recepción de Comprobante en Email_
![Producto](./App%20Images/17.%20Pago%20en%20Email.png)

_Reviews_
![Producto](./App%20Images/14.%20Reviews.png)

_Panel de Administracion_
![Producto](./App%20Images/9.%20Panel%20de%20Admin%20Home.png)

_Creacion de Producto_
![Producto](./App%20Images/10.%20Creacion%20de%20Producto.png)

_Ubicación de Locales en Google Maps_
![Producto](./App%20Images/16.%20Ubicacion.png)

___


## Comenzando 🚀

_Para poder ejecutar el proyecto de forma local deberá crear los archivos .env en las carpetas /api y /client con la configuración necesaria de acuerdo a los archivos .env.example que hay en cada carpeta._



### Pre-requisitos 📋

_Se necesita estar registrado en los siguientes servicios para ejecutar Heladitos APP_

Para el Frontend

* [Auth0](https://auth0.com/es)
* [Google Maps Api](https://developers.google.com/maps)
* [Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference)
* [Mercado Pago](https://www.mercadopago.com.pe/developers/es)


Para el Backend

* [Auth0](https://auth0.com/es)
* [Mercado Pago](https://www.mercadopago.com.pe/developers/es)
* [Nodemailer](https://nodemailer.com/about/)
* [MongoDB](https://www.mongodb.com/)
* [Mongo Atlas](https://www.mongodb.com/es/atlas/database)

### Instalación 🔧

_Para ejecutar el proyecto se deberá navegar con el terminal dentro de las carpetas /client para el front y /api para el back, donde deberán seguir los siguientes pasos:_


_⌨️ Para instalar los servicios, navegar dentro de la carpeta correspondiente y ejecutar el comando_

```
npm install
```

_⌨️ Para ejecutarlo_

```
npm start
```

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_


## Construido con 🛠️

_Para la construcción de Heladitos APP se utilizaron las siguientes tecnologías_

* [React](https://es.reactjs.org/) - Para generar las vistas.
* [Chakra UI](https://chakra-ui.com/) - Librería de React para la generación de componentes estilizados.
* [React Simple Chatbot](https://lucasbassetti.com.br/react-simple-chatbot/) - Le da vida a Boty-Heladito.
* [Cloudinary](https://cloudinary.com/documentation/image_upload_api_reference) - Para subir imágenes de los productos y perfiles de usuario.
* [Redux Toolkit](https://redux-toolkit.js.org/) - Para el manejo de los estados de la aplicación.
* [React Apex Charts](https://apexcharts.com/docs/react-charts/) - Para los gráficos de ventas.
* [Mercado Pago](https://www.mercadopago.com.pe/developers/es) - Para la gestión de pagos bajo la modalidad de pago único.
* [NodeJs](https://nodejs.org/en/) - Para la creación del server.
* [ExpressJs](https://expressjs.com/es/) - Para la creación del REST API.
* [Auth0](https://auth0.com/es) - Para el manejo de la autenticación
* [Nodemailer](https://nodemailer.com/about/) - Para el envío de correspondencia desde la App.
* [MongoDB](https://www.mongodb.com/) - Para la Base de Datos.
* [Mongoose](https://mongoosejs.com/) - ORM para Mongo DB.
* [Mongo Atlas](https://www.mongodb.com/es/atlas/database) - Como host de nuestra Base de Datos.

## Autores ✒️

_El fabuloso equipo que llevó a cabo este proyecto:_

![Autores](./App%20Images/15.%20Equipo.png)

* **Santiago Corino** - [Linkedin](https://www.linkedin.com/in/santiago-corino-720153b9/) - [Github](https://github.com/SantiCorino)
* **Sofía Navarro** - [Linkedin](https://www.linkedin.com/in/navarro-sofiar/) - [Github](https://github.com/NavarroSofiar)
* **Marcos Soria** - [Linkedin](https://www.linkedin.com/in/marcos-soria-fullstack/) - [Github](https://github.com/Marcos1up)
* **Franco Pelaez** - [Linkedin](https://www.linkedin.com/in/franco-pelaez/) - [Github](https://github.com/FrancoPelz)
* **Cristian Cobo** - [Linkedin](https://www.linkedin.com/in/cristian-cobo-211365227/) - [Github](https://github.com/cris341)
* **Liza García** - [Linkedin](https://www.linkedin.com/in/lizags/) - [Github](https://github.com/LizaGS)
* **Ezequiel Murga** - [Linkedin](https://www.linkedin.com/in/ezequiel-murga-pereyra/) - [Github](https://github.com/exekyelmurga)
* **Rolando Quispe** - [Linkedin](https://www.linkedin.com/in/rolando-quispe/) - [Github](https://github.com/oxalc88)


---
⌨️ con ❤️ por [oxalc88](https://github.com/oxalc88) 😊
