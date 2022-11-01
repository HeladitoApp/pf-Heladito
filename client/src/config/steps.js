import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import AboutUs from '../page/About/AboutUs'
import Creadores from '../page/Chat/Creadores';
 
 const steps = [
  {
    id: "1",
    message: "Soy es Boty-Heladito y estoy para ayudarte, cuál es tu nombre?",
    trigger: "2"
},
{
    id: "2",
    user: true,
    validator: (value) => {
        if (/[a-zA-Z]{2,30}$/.test(value)) {
            return true;
        }
        else {
            return 'Por favor ingrese un nombre válido.';
        }
    },
    trigger: "3"
},
{
    id: "3",
    message: "Hola {previousValue}, es un placer conocerte!",
    trigger: "4"
},
{
    id: "4",
    message: "Necesitas consultar algo?",
    trigger: "5"
},
{
    id: "5",
    options: [
        {value: "y", label: "Si", trigger: "6A"},
        {value: "n", label: "No", trigger: "6B"},
    ]
},
{
    id: "6A",
    message: "Genial! indicame que estás buscando...",
    trigger: "seleccion"
},
{
    id: "6B",
    message: "Lo siento si no pude ser de ayuda para ud... Nos vemos luego!",
    end: true
},
{
    id: "seleccion",
    options: [
        {value: "h", label: "Horarios", trigger: "Horarios"},
        {value: "d", label: "Dirección", trigger: "Direccion"},
        {value: "p", label: "Productos", trigger: "Productos"},
        {value: "e", label: "Nuestra Empresa", trigger: "NuestraEmpresa"},
        {value:"c", label:"Creadores", trigger:"Creadores"} 
    ]
},
{
    id: "Creadores",
    component: <Creadores/>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "Horarios",
    message: "Nuestro horario de atención es de 11 a 23hs 🕰️",
    trigger: "preguntaVuelta"
},
{
    id: "Direccion",
    message: "Nuestro dirección es Avenida Siempreviva 742",
    trigger: "preguntaVuelta"
},
{
    id: "Productos",
    message: "¡Iupi! por favor selecciona qué productos quieres ver",
    trigger: "seleccionProducto"
},
{
    id: "NuestraEmpresa",
    message: "¡Iupi! veo que quieres saber más sobre nosotros, por favor selecciona una opción ",
    trigger: "seleccionNuestra"
},
{
    id: "seleccionProducto",
    options: [
        {value: "Hel", label: "Helados", trigger: "9"},
        {value: "comb", label: "Combos", trigger: "10"},
        {value: "bom", label: "Bombones", trigger: "11"},
        {value: "sha", label: "Shakes", trigger: "12"},
        {value: "cr", label: "Crepes", trigger: "13"},
        {value: "par", label: "Parfaits", trigger: "14"},
    ]
},
{
    id: "seleccionNuestra",
    options: [
        {value: "sobre", label: "Sobre Nososotros", trigger: "15"},
        {value: "res", label: "Reseñas", trigger: "16"},
        {value: "cont", label: "Contactanos", trigger: "17"},
        {value: "pais", label: "Países de Nuestras Sucursales", trigger: "18"},
   ]
},
{
    id: "9",
    component: <Link to={'/products/helados'}>Presione aquí para ser redirigido  <Button borderRadius={50} backgroundColor="#FFECF8">Helados</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "10",
    component: <Link to={'/products/combos'}>Presione aquí para ser redirigido  <Button borderRadius={50} backgroundColor="#FFECF8">Combos</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "11",
    component: <Link to={'/products/bombones'}>Presione aquí para ser redirigido   <Button borderRadius={50} backgroundColor="#FFECF8">Bombones</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "12",
    component: <Link to={'/products/shakes'}>Presione aquí para ser redirigido     <Button borderRadius={50} backgroundColor="#FFECF8">Shakes</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "13",
    component: <Link to={'/products/crepess  /products/parfaits'}>Presione aquí para ser redirigido   <Button borderRadius={50} backgroundColor="#FFECF8">Crepes</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "14",
    component: <Link to={'/products/parfaits'}>Presione aquí para ser redirigido    <Button borderRadius={50} backgroundColor="#FFECF8">Parfaits</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "15",
    component: <Link to={'/sobre_nosotros'}>Presione aquí para ver al mejor equipo de todo Henry     <Button borderRadius={50} backgroundColor="#FFECF8">Sobre Nosotros</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "16",
    component: <Link to={'/reviews'}>Presione aquí para ser redirigido <Button borderRadius={50} backgroundColor="#FFECF8">Reseñas</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "17",
    component: <Link to={'/contactanos'}>Presione aquí para ser redirigido<Button  borderRadius={50} backgroundColor="#FFECF8">Contáctanos</Button></Link>,
    asMessage: true,
    trigger: "preguntaVuelta"
},
{
    id: "18",
    message: "Tenemos sucursales en: Argentina, Colombia y Perú",
    trigger: "preguntaVuelta"
},

{
    id: "preguntaVuelta",
    message: "Necesitas consultar algo más?",
    trigger: "respuestaVuelta",
}, 
{
    id: "respuestaVuelta",
    options: [
        {value: "y", label: "Si", trigger: "6A"},
        {value: "n", label: "No", trigger: "noback"},
    ],
},
{
    id: "noback",
    message: "Un placer haberte ayudado... Nos vemos luego!",
    end: true
},








  
]; 



export default steps;
