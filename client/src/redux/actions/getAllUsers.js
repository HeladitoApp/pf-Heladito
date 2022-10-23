import { getUsuarios } from "../slices";
import axios from "axios";

export const getAllUsers = () => (dispatch) => {
    axios.get('http://localhost:3800//usuarios')
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => console.log(e))
}