//import { addCompra } from "../slices";
import axios from "axios";

export const addCompraDb = (data) => (dispatch) => {
    console.log(data);
    axios.post('http://localhost:3800/addCompras', data)
    //.then(res => window.location.replace(res.data))
    .catch(error => console.log(error))
}