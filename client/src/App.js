//import './App.css';
import { Route, Routes } from "react-router-dom";

import CardDetail from "./page/detail/CardDetail";
//import CardDetailDos from "./page/detail/CardDetailDos";
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

import ActualizarUsuario from './componentes/updateUsuario/actualizarUsuario'
import PaymentFeedback from "./page/Back_URL/PaymentFeedback";
import AdminHome from "./page/admin/AdminHome";
import AgregarProducto2 from './componentes/addProducto/addProducto'
import Users from "./page/admin/Users";
import ModifiedProduct from "./page/admin/ModifiedProduct";
import UserHome from "./page/Usuario/UserHome";
import ModifiedExtra from "./page/admin/ModifiedExtra";
import ActualizarExtra from "./componentes/updateExtra/updateExtra";
import Loading from "./componentes/loading/loading";
import { useAuth0 } from "@auth0/auth0-react";
import NavSuperior from "./componentes/navBar/navSuperior";
import { useDisclosure } from "@chakra-ui/react";



function App() {

  const [page, setPage] = useState(1);
  const { isLoading } = useAuth0();

  const { isOpen, onOpen, onClose } = useDisclosure();

  if (isLoading) {
    return <Loading />;
  } else {
  return (
    <div>
      <NavSuperior setPage={setPage} page={page} isOpenM={isOpen} onOpenM={onOpen} onCloseM={onClose}/>
      <Routes>
        <Route path="/" element={<Home setPage={setPage} page={page} />} />
        {/* <Route path="/product/:productId" element={<CardDetailDos />} /> */}
        <Route path="/product/:productId" element={<CardDetail />} />
        <Route path="/products/:type" element={<Types />} />
        <Route path="/login" element={<Login isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>} />
        <Route path="/users/client" element={<Consumer />} />
        {/* <Route path="/admin" element={<ProtectedRoute component={Admin} />} /> */}
        <Route path="/admin" element={<ProtectedRoute component={AdminHome} />} />
        <Route path="/admin/crear_producto" element={<ProtectedRoute component={AgregarProducto2} />} />
        <Route path="admin/modificar_producto" element={<ProtectedRoute component={ModifiedProduct} />} />
        <Route path="admin/modificar_toppings" element={<ProtectedRoute component={ModifiedExtra} />} />
        <Route path="/admin/clientes" element={<ProtectedRoute component={Users} />} />
        <Route path="/admin/update/:id" element={<ActualizarUsuario />} />
        <Route path="/product/add" element={<AgregarProducto />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/cart" element={<ResumenPedido />} />
        <Route path="admin/modificar_producto/update/:id" element={<ProtectedRoute component={ActualizarProducto} />} />
        <Route path="admin/modificar_extra/update/:id" element={<ProtectedRoute component={ActualizarExtra} />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/pending" element={<PaymentPending />} />
        <Route path="/payment/failure" element={<PaymentFailure />} />
        <Route path="/sobre_nosotros" element={<AboutUs />} />
        <Route path="/contactanos" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/payment/feedback" element={<PaymentFeedback />} />
        <Route path="/login/user" element={<ProtectedRoute component={UserHome} />} />
      </Routes>
      <Footer />
    </div>
  );}
}

export default App;
