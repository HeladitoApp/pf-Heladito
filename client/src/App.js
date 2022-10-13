//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { CardDetail } from "./page/detail/CardDetail";

import NavBar from "./componentes/navBar/NavBar";


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <CardDetail />
        {/* <Route></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
