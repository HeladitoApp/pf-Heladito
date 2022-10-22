import { getFlavors } from "../slices";
import axios from "axios";

export const getFlavorsFromDb = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos/sabores`)
        .then(res => dispatch(getFlavors(res.data)))
        .catch(e => console.log(e))
}