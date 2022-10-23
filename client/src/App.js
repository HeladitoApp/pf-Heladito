//import './App.css';
import { Route, Routes } from "react-router-dom";

import NavBar from "./componentes/navBar/NavBar";
import CardDetail from "./page/detail/CardDetail";
//import CardDetailDos from "./page/detail/CardDetailDos";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Admin from "./page/admin/Admin";
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



function App() {

  const [page, setPage] = useState(1);

  return (
    <div>
      <NavBar setPage={setPage} page={page} />
      <Routes>
        <Route path="/" element={<Home setPage={setPage} page={page} />} />
        {/* <Route path="/product/:productId" element={<CardDetailDos />} /> */}
        <Route path="/product/:productId" element={<CardDetail />} />
        <Route path="/products/:type" element={<Types />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/client" element={<Consumer />} />
        <Route path="/admin" element={<ProtectedRoute component={Admin} />} />
        <Route path="/admin/update/:id" element = {<ActualizarUsuario/>}/>
        <Route path="/product/add" element={<AgregarProducto />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/cart" element={<ResumenPedido />} />
        <Route path="/product/update/:id" element={<ActualizarProducto/>} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
        <Route path="/payment/pending" element={<PaymentPending />} />
        <Route path="/payment/failure" element={<PaymentFailure />} />
        <Route path="/sobre_nosotros" element={<AboutUs />} />
        <Route path="/contactanos" element={<ContactUs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/payment/feedback" element={<PaymentFeedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
