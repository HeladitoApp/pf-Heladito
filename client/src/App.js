//import './App.css';
import { Route } from "react-router-dom";
import { Switch } from "@chakra-ui/react";

import NavBar from "./componentes/navBar/NavBar";
import { CardDetail } from "./page/detail/CardDetail";
import Home from "./page/home/Home";
import Login from "./page/login/Login";
import Admin from "./page/users/Admin";
import Consumer from "./page/Consumer/Consumer";
import NotFound from "./page/NotFound/NotFound";



function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<CardDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users/client" element={<Consumer />} />
        <Route path="/users/admin" element={<Admin />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
