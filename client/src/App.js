//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { CardDetail } from "./page/detail/CardDetail";
import {Home} from "./page/home/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <CardDetail /> */}
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
