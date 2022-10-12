//import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import { CardDetail } from "./page/detail/CardDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CardDetail />
        {/* <Route></Route> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
