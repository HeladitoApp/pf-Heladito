//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { FlavorsList } from "./componentes/cards/FlavorsList/FlavorsList";
import { CardDetail } from "./page/detail/CardDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <CardDetail /> */}
        <FlavorsList />
        {/* <Route></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
