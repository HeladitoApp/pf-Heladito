import { getUsuarios } from "../slices";
import axios from "axios";

export const traerUsuariosById = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/usuario/${id}`)
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => console.log(e))
}