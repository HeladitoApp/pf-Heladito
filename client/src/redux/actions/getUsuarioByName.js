import { getUsuarios } from "../slices";
import axios from "axios";

export const traerUsuarios = (name) => (dispatch) => {
    axios.get(`http://localhost:3800/listaUsuarios/?name=${name}`)
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => alert(e.response.data.message))
}