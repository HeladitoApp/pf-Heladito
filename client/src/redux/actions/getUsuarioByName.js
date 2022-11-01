import { getUsuarios } from "../slices";
import axios from "axios";

export const traerUsuarios = (name) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/listaUsuarios/?name=${name}`)
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => alert(e.response.data.message))
}

export const traerUsuariosE = (email) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/listaUsuarios/?email=${email}`)
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => alert(e.response.data.message))
}