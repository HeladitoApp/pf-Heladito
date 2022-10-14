import { getProductos } from "../slices";
import axios from "axios";

export const getProdsFromDbByName = (name) => (dispatch) => {
    axios.get(`http://localhost:3800/productos?name=${name}`)
        .then(res => dispatch(getProductos(res.data)))
        .catch(e => console.log(e))
}