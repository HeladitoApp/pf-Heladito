import { addCompra } from "../slices";
import axios from "axios";

export const addCompraDb = (data) => (dispatch) => {
    console.log(data)
    // axios.get(`http://localhost:3800/productos/${id}`)
    //     .then(res => dispatch(getDetails(res.data)))
    //     .catch(e => console.log(e))
}