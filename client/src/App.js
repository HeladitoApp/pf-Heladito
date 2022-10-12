//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { CardDetail } from "./page/detail/CardDetail";
import NavProducts from "./componentes/navBar/navProducts";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavProducts />
        <CardDetail />
        {/* <Route></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
