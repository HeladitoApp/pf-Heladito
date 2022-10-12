import {getProductos} from "../slices";
import axios from "axios";

export const getProdsFromDb=() => (dispatch) => {
    axios.get('http://localhost:3800/productos')
    .then(res => dispatch(getProductos(res.data)))
    .catch(e => console.log(e))
}