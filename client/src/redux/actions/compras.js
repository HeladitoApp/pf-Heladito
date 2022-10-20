import { addCompra } from "../slices";
import axios from "axios";

export const addCompraDb = (data) => (dispatch) => {
    axios.post('http://localhost:3800/payment', data)
    .then(res => console.log(res.data))
    .catch(error => console.log(error))
}