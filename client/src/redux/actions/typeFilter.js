import { getProductos } from "../slices/index";
import axios from "axios";

export const typeFilter = (type) => (dispatch) => {
    axios.get(`http://localhost:3800/productos/tipos/${type}`)
        .then(res => dispatch(getProductos(res.data.message)))
        .catch(e => console.log(e))
}