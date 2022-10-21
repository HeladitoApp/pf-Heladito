import { getDetails } from "../slices";
import axios from "axios";

export const getProductById = (id) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos/${id}`)
        .then(res => dispatch(getDetails(res.data)))
        .catch(e => console.log(e))
}