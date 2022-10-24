//import './App.css';
import { Route, Routes } from "react-router-dom";

//import NavBar from "./componentes/navBar/NavBar";
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
import NavSuperior from "./componentes/navBar/navSuperior";
import ActualizarExtra from "./componentes/updateExtra/updateExtra";

import ActualizarUsuario from './componentes/updateUsuario/actualizarUsuario'
import PaymentFeedback from "./page/Back_URL/PaymentFeedback";
import AdminHome from "./page/admin/AdminHome";
import AgregarProducto2 from './componentes/addProducto/addProducto'
import Users from "./page/admin/Users";
import ModifiedProduct from "./page/admin/ModifiedProduct";



function App() {

  const [page, setPage] = useState(1);

  return (
    <div>
      <NavSuperior setPage={setPage} page={page} />
      <Routes>
        <Route path="/" element={<Home setPage={setPage} page={page} />} />
        {/* <Route path="/product/:productId" element={<CardDetailDos />} /> */}
        <Route path="/product/:productId" element={<CardDetail />} />
        <Route path="/products/:type" element={<Types />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/client" element={<Consumer />} />
        {/* <Route path="/admin" element={<ProtectedRoute component={Admin} />} /> */}
        <Route path="/admin" element={<ProtectedRoute component={AdminHome} />} />
        <Route path="/admin/crear_producto" element={<ProtectedRoute component={AgregarProducto2} />} />
        <Route path="admin/modificar_producto" element={<ProtectedRoute component={ModifiedProduct} />} />
        <Route path="/admin/usuarios" element={<ProtectedRoute component={Users} />} />
        <Route path="/admin/update/:id" element={<ActualizarUsuario />} />
        <Route path="/product/add" element={<AgregarProducto />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/product/cart" element={<ResumenPedido />} />
        <Route path="admin/modificar_producto/update/:id" element={<ProtectedRoute component={ActualizarProducto} />}></Route>
        <Route path="/product/update/extras" element={<ActualizarExtra/>}></Route>

        <Route path="/payment/feedback" element={<PaymentFeedback />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
