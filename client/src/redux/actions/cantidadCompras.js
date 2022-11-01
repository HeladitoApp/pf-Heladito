import axios from "axios";
import { cantidadCompras } from "../slices";

export const getCantCompras = () => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/rankingproductos`)
        .then(res => dispatch(cantidadCompras(res.data)))
        .catch(e => console.log(e))
}