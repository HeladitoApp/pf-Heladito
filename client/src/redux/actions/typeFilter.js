import { getProductos } from "../slices/index";
import axios from "axios";

export const typeFilter = (payload) => (dispatch) => {
    axios.get(`http://localhost:3800/productos/helados`)
        .then(res => dispatch(getProductos(res.data)))
        .catch(e => console.log(e))
}