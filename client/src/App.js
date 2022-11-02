import './App.css';
import { Link, Route, Routes, redirect } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
//import Admin from "./page/admin/Admin";
import Consumer from "./page/Consumer/Consumer";
import NotFound from "./page/NotFound/NotFound";
import AgregarProducto from "./componentes/addProducto/addProducto";
import ResumenPedido from "./page/ResumenDelPedido/ResumenPedido";
import Footer from '../src/componentes/Footer/Footer';
import Types from "./page/Types/Types";
import ActualizarProducto from "./componentes/updateProducto/actualizarProducto";
import { useState } from "react";
import ProtectedRoute from "./auth/protectedRoute";
import AboutUs from "./page/About/AboutUs";
import ContactUs from "./page/Contact/ContactUs";
import PaymentSuccess from "./page/Back_URL/PaymentSuccess";
import PaymentPending from "./page/Back_URL/PaymentPending";
import PaymentFailure from "./page/Back_URL/PaymentFailure";
import Reviews from "./page/Reviews/Reviews";

import ActualizarUsuario from './componentes/updateUsuario/actualizarUsuario';
import PaymentFeedback from "./page/Back_URL/PaymentFeedback";
import AgregarProducto2 from './componentes/addProducto/addProducto'
import ModifiedProduct from "./page/admin/ModifiedProduct";
import UserHome from "./page/Usuario/UserHome";
import ModifiedExtra from "./page/admin/ModifiedExtra";
import ActualizarExtra from "./componentes/updateExtra/updateExtra";
import Loading from "./componentes/loading/loading";
import { useAuth0 } from "@auth0/auth0-react";
import NavSuperior from "./componentes/navBar/navSuperior";
import { Button, useDisclosure } from "@chakra-ui/react";
import DataTables from "./page/admin/DataTables";
import Clientes from "./page/admin/Clientes";
import ComprasCard from "./componentes/ComprasCard";
import FavoritosCliente from "./componentes/favoritosCliente/favoritosCliente";
import HistoralPedido from "./page/Usuario/HistorialPedido";
import NoAutrizado from "./page/noAutorizado/noAutorizado";
import { useDispatch } from "react-redux";
import { updateUsuario } from './redux/actions/updateUsuario'
import AdminInbox from "./page/admin/AdminInbox";
import { useSelector } from "react-redux";
import ReporteCompras from "./page/admin/ReporteCompras";
import DarDeAlta from './componentes/darDeAlta/darDeAlta';
import Feedbacks from "./page/admin/Feedbacks";
import CrearAnuncio from "./page/admin/CrearAnuncio";
import MainCardDetail from "./page/detail/MainCardDetail";
import Informacion from "./page/Usuario/Información";

function App() {

  

  const [page, setPage] = useState(1);
  const { isLoading, logout } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const usuariosss = useSelector((state) => state.state.usuario);
  const dispatch = useDispatch();
  let id = usuariosss[0]?._id
  let rolDelUsuario = usuariosss[0]?.rol

  if (isLoading) {
    return <Loading />;
  } 
  if(usuariosss[0]?.activo === false) { 
    return <DarDeAlta/>
  }
  else {
      return (
        <div>
        <NavSuperior setPage={setPage} page={page} isOpenM={isOpen} onOpenM={onOpen} onCloseM={onClose} />
        <Routes>
          <Route path="/" element={<Home setPage={setPage} page={page} />} />
          <Route path="/product/:productId" element={<MainCardDetail/>} />
          {/* <Route path="/product/:productId" element={<CardDetail />} /> */}
          <Route path="/products/:type" element={<Types />} />
          <Route path="/login" element={<Login isOpen={isOpen} onOpen={onOpen} onClose={onClose} />} />
          <Route path="/users/client" element={<Consumer />} />
          {/* <Route path="/admin" element={<ProtectedRoute component={Admin} />} /> */}
          {rolDelUsuario === 'admin'? <Route path="/admin" element={<ProtectedRoute component={DataTables} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="/admin/crear_producto" element={<ProtectedRoute component={AgregarProducto2} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="admin/modificar_producto" element={<ProtectedRoute component={ModifiedProduct} />} /> : ''}
          {rolDelUsuario === 'admin'?  <Route path="admin/modificar_toppings" element={<ProtectedRoute component={ModifiedExtra} />} /> : ''}
          {rolDelUsuario === 'admin'?  <Route path="/admin/clientes" element={<ProtectedRoute component={Clientes} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="/admin/clientes/:email" element={<ProtectedRoute component={ComprasCard} />} /> : ''}
          {/* {rolDelUsuario === 'admin'? <Route path="/admin/tabla_de_datos" element={<ProtectedRoute component={DataTables} />} /> : ''} */}
          {rolDelUsuario === 'admin'? <Route path="/admin/update/:id" element={<ActualizarUsuario />} /> :''}
          {rolDelUsuario === 'admin'? <Route path="/product/add" element={<AgregarProducto/>} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="admin/modificar_extra/update/:id" element={<ProtectedRoute component={ActualizarExtra} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="admin/modificar_producto/update/:id" element={<ProtectedRoute component={ActualizarProducto} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="admin/inbox" element={<ProtectedRoute component={AdminInbox} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="admin/feedbacks" element={<ProtectedRoute component={Feedbacks} />} /> : ''}
          {rolDelUsuario === 'admin'? <Route path="admin/crear_anuncio" element={<ProtectedRoute component={CrearAnuncio} />} /> : ''}
          {/* <Route path="/admin" element={<ProtectedRoute component={AdminHome} />} />
          <Route path="/admin/crear_producto" element={<ProtectedRoute component={AgregarProducto2} />} /> */}
          {/* <Route path="admin/modificar_producto" element={<ProtectedRoute component={ModifiedProduct} />} /> */}
          {/* <Route path="admin/modificar_toppings" element={<ProtectedRoute component={ModifiedExtra} />} /> */}
          {/* <Route path="/admin/clientes" element={<ProtectedRoute component={Clientes} />} /> */}
          {/* <Route path="/admin/clientes/:email" element={<ProtectedRoute component={ComprasCard} />} /> */}
          {/* <Route path="/admin/tabla_de_datos" element={<ProtectedRoute component={DataTables} />} /> */}
          {/* <Route path="/admin/update/:id" element={<ActualizarUsuario />} /> */}
          {/* <Route path="/product/add" element={<AgregarProducto />} /> */}
          {/* <Route path="admin/modificar_extra/update/:id" element={<ProtectedRoute component={ActualizarExtra} />} /> */}
          {/* <Route path="admin/modificar_producto/update/:id" element={<ProtectedRoute component={ActualizarProducto} />} /> */}
          <Route path="*" element={<NotFound />} />
          <Route path="notAuthorized" element={<NoAutrizado/>} />
          <Route path="/product/cart" element={<ResumenPedido />} />
          
          

          <Route path="/payment/success" element={<PaymentSuccess />} />
          <Route path="/payment/pending" element={<PaymentPending />} />
          <Route path="/payment/failure" element={<PaymentFailure />} />
          <Route path="/sobre_nosotros" element={<AboutUs />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/payment/feedback" element={<PaymentFeedback />} />
          <Route path="/login/user" element={<ProtectedRoute component={UserHome} />} />
          <Route path="/login/user/historial_de_pedidos" element={<ProtectedRoute component={HistoralPedido} />} />
          <Route path="/login/user/favoritos" element={<ProtectedRoute component={FavoritosCliente} />} />
          <Route path="/admin/reporte_de_compra" element={<ReporteCompras/>} />
          <Route path="/login/user/mi_informacion" element={<ProtectedRoute component={Informacion} />} />
        </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
