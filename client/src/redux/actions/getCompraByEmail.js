import axios from "axios";
import { compraByEmail } from "../slices";

export const getCompraByEmail = (email) => (dispatch) => {
    axios.get(`${process.env.REACT_APP_SERVER_URL}/comprasCliente/${email}`)
        .then(res => dispatch(compraByEmail(res.data)) )
        .catch(e => console.log(e))
}