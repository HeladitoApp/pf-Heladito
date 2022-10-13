import { getDetails } from "../slices";
import axios from "axios";

export const getProductById = (id) => (dispatch) => {
    axios.get(`http://localhost:3800/productos/${id}`)
        .then(res => dispatch(getDetails(res.data)))
        .catch(e => console.log(e))
}