import { getProductos } from "../slices";
import axios from "axios";

export const getProdsFromDb = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/productos`)
        .then(res => dispatch(getProductos(res.data)))
        .catch(e => console.log(e))
}