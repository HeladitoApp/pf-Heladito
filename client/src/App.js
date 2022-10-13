//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { FlavorsList } from "./componentes/Acordeon/FlavorsList";
import { ToppingsList } from "./componentes/Acordeon/ToppingsList";
import { CardDetail } from "./page/detail/CardDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <CardDetail /> */}
        <FlavorsList />
        <ToppingsList />
        {/* <Route></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
