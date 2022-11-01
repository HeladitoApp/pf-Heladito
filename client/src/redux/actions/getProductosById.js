import { getProductoById } from "../slices";
import axios from "axios";

export const traerUsuariosById = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos/${id}`)
        .then(res => dispatch(getProductoById(res.data)))
        .catch(e => console.log(e))
}