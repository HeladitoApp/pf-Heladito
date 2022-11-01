import axios from "axios";
import { getUsuarioByEmail } from "../slices";

export const usuarioByEmail = (email) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/usuarioEmail/${email}`)
        .then(res => dispatch(getUsuarioByEmail(res.data)))
        .catch(e => console.log(e))
}