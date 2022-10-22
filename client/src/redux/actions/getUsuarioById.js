import { getUsuarios } from "../slices";
import axios from "axios";

export const traerUsuariosById = (id) => (dispatch) => {
    axios.get(`http://localhost:3800/usuario/${id}`)
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => console.log(e))
}