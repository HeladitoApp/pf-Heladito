import { getProductoById } from "../slices";
import axios from "axios";

export const traerUsuariosById = (id) => (dispatch) => {
    axios.get(`http://localhost:3800/productos/${id}`)
        .then(res => dispatch(getProductoById(res.data)))
        .catch(e => console.log(e))
}