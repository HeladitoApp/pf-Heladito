import { getFlavors } from "../slices";
import axios from "axios";

export const getFlavorsFromDb = () => (dispatch) => {
    axios.get('http://localhost:3800/productos/sabores')
        .then(res => dispatch(getFlavors(res.data)))
        .catch(e => console.log(e))
}