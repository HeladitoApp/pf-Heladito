import { getUsuarios } from "../slices";
import axios from "axios";

export const getAllUsers = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/listausuarios`)
        .then(res => dispatch(getUsuarios(res.data)))
        .catch(e => console.log(e))
}