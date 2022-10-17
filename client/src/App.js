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


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/:productId" element={<CardDetailDos />} /> */}
        <Route path="/product/:productId" element={<CardDetail />} />
        <Route path="/products/:type" element={<Types />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/client" element={<Consumer />} />
        <Route path="/users/admin" element={<Admin />} />
        <Route path="/product/add" element = {<AgregarProducto/>}></Route>
        <Route path="*" element={<NotFound />} />
        <Route path="/product/cart" element={<ResumenPedido />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
